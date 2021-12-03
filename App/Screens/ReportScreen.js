import React, { Component,useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Screen from '../Components/Screen'

import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import API from "../config/api";
import RNSpeedometer from 'react-native-speedometer'
import colors from '../config/colors';
import AppText from '../Components/AppText';
import { TouchableOpacity } from 'react-native';
import AppButton from '../Components/AppButton';
import {MsgBox,Colors} from './../Components/styles';
import Html from '../Components/Html.js'


const labels= [
    {
      name: 'Vulnerable_Status: Low',
      labelColor: '#f4ab44',
      activeBarColor: '#44abeb',
    },
    {
      name: 'Vulnerable_Status: Medium',
      labelColor: '#f4ab44',
      activeBarColor: '#eba844',
    },
    {
      name: 'Vulnerable_Status: High',
      labelColor: '#f4ab44',
      activeBarColor: '#eb4444',
    }]

    const createAndSavePDF = async (html) => {
        try {
          const { uri } = await Print.printToFileAsync({ html });
          if (Platform.OS === "ios") {
            await Sharing.shareAsync(uri);
          } else {
            const permission = await MediaLibrary.requestPermissionsAsync();
            if (permission.granted) {
              await MediaLibrary.createAssetAsync(uri);
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      

export default ReportScreen = ({ route, navigation }) =>{
  const [value, setvalue] = useState(0)
  const [User, setUser] = useState([])
  const [message, setmessage] = useState("")
  const [config, setconfig] = useState()
  const { item } = route.params;
  var data = JSON.parse(item.data)
 
  
const loadData = async () => {
    try {
        var value = await AsyncStorage.getItem('Credentials')
        if(value !== null) {
            value = JSON.parse(value)
            setUser(value)
            setconfig({headers: {
              'Authorization': 'Bearer ' + value.token
          }})
          }
      } catch(e) {
          console.log(e)
      }
    }
  
    const handleDelete = async (_id) => {
      axios
      .delete(`${API}/Scanner/${_id}`, {
        headers: {
        'Authorization': 'Bearer ' + User.token
        }
     })
      .then((response) => {
        var { status, data } = response;
        console.log(status)
        if(status != '204'){
          setmessage("Error occured");
        }else{
          navigation.goBack();
        }
        })
        .catch((error) => {
          if(error.status == 403){
            setmessage("Access denied, Login Again")
          }
          else{
              setmessage("An error occurred. Check your network and try again")
            }
            console.log(error);
            console.log("error");
        });
  };
  

    const severity = () => {
        let score = 0;
        if(data.sqli.length != 0){
          score=score+90;
        }else if(data.xss.length != 0){
          score=score+50;
        }else if(data.exif !== null){
          score=score+10;
        }
        setvalue(score);
    }

    useEffect(()=>{
      loadData()
      severity()
      }
      ,[])


     return (
         <>
            <Screen style={styles.container}>
            
            <View style={styles.info}>
            <MsgBox type="error">{message}</MsgBox> 
            <AppText style={styles.host}>
                Target: {data.url}
            </AppText>
            </View>
          {/* <TextInput placeholder="Speedometer Value" style={styles.textInput} onChangeText={change} /> */}
        
          
          <RNSpeedometer labelStyle={{opacity:0}}labelNoteStyle={styles.test} labelWrapperStyle={styles.test2} value={value} size={300} labels={labels} />
          
            
           
        </Screen>

          <View style={styles.button}>  
          <View style={styles.actions}>
           <AppButton title="Download Report"  onPress={() => {createAndSavePDF(Html)}} color="secondary"/>
          </View>
          <View style={styles.actions}>
           <AppButton title="Delete Report"  onPress={() => {handleDelete(item._id)}} color="danger"/>
          </View>
          </View>
            
         </>
        
      );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test:{
      color:colors.light,
      bottom:16
  },
  button: {
    flexDirection:"row",
    justifyContent:"space-between",
    bottom:40,
  },
    test2:{
        top:25,
        backgroundColor:colors.danger,
        height:50,
        width:250,
        borderRadius:100,
        alignSelf:"center"
    },
    actions:{
        padding:10,
        width:150
    },
    host:{
        fontFamily: 'Roboto',
        bottom: 10
    },
    download:{
        width:100,
        height:100,
        backgroundColor:colors.danger
    },
    info: {
    borderWidth:1 ,
    borderBottomColor: 'black',
    height: 35,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20,
    justifyContent:"center",
    alignItems:"center"
  },
});