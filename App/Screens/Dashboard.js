import React, { Component,useState } from 'react';
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

import RNSpeedometer from 'react-native-speedometer'
import colors from '../config/colors';
import AppText from '../Components/AppText';
import { TouchableOpacity } from 'react-native';
import AppButton from '../Components/AppButton';
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

export default Dashboard = () =>{

    const [value, setvalue] = useState(300)
    const change = (value) => {
        if(value=>0) {
            let var1 = parseInt(value)
            setvalue(var1)
        }   
        
        else
        setvalue(0)
    }

     return (
         <>
            <Screen style={styles.container}>
            
            <View style={styles.info}>
            <AppText style={styles.host}>
                Target: http://www.google.com
            </AppText>
            </View>

          {/* <TextInput placeholder="Speedometer Value" style={styles.textInput} onChangeText={change} /> */}
        
          <RNSpeedometer labelStyle={{opacity:0}}labelNoteStyle={styles.test} labelWrapperStyle={styles.test2} value={value} size={300} labels={labels} />
          
            
           
        </Screen>

          <TouchableOpacity style={{bottom:40,alignItems:"center",justifyContent:"flex-end"}}>
          <View style={styles.button}>  
           <AppButton title="Download Report" onPress={() => {createAndSavePDF(Html)}} color="secondary"/>
          </View>
            </TouchableOpacity>
            
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
    width: "100%",
    padding: 5,
    borderRadius: 10,
  },
    test2:{
        top:25,
        backgroundColor:colors.danger,
        height:50,
        width:250,
        borderRadius:100,
        alignSelf:"center"
    },
    host:{
        fontFamily: 'Roboto'
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