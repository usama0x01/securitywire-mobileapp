
import React,{useState,useEffect,useRef} from 'react'
import { Animated,StyleSheet,View,TextInput,Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Button, ThemeProvider } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import { NavigationContainer } from '@react-navigation/native';

import Screen from '../Components/Screen'
import colors from '../config/colors';
import dstyles from '../config/styles';


export default  ScanScreen = () => {

    const widthAnim = useRef(new Animated.Value(250)).current;

    const widthinc = () => {
        Animated.timing(widthAnim, {
          toValue: 350,
          duration: 500,
          useNativeDriver: false
        }).start();
      };
    
      const widthdec = () => {
        Animated.timing(widthAnim, {
          toValue: 250,
          duration: 150,
          useNativeDriver: false
        }).start();
      };

  return (
      <Screen>
          <TouchableWithoutFeedback onPress={() => {
              Keyboard.dismiss()
              widthdec()
              }}>
       <View style={{flex:1,
        justifyContent:'center',
        alignContent:'center'}}>
        <Animated.View style={{width:widthAnim,alignSelf:'center'}}>
                <View style={styles.container}>
                    {/* <MaterialCommunityIcons name="search-web" size={30} color={dstyles.colors.medium} />   */}
                    <TextInput onFocus={()=>{widthinc()}} placeholder="Enter Url (www.redacted.com)" style={[dstyles.text,styles.inp]} color="black" autoCapitalize="none" autoCorrect={false}/>
                </View>
            </Animated.View>

          <View style={styles.button}>  
           <AppButton title="Scan"  color="danger"/>
          </View>
       </View>
       
          </TouchableWithoutFeedback>
      </Screen>
   
  );
};








const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: dstyles.colors.light,
        borderRadius:20,
      padding:11,
        overflow:'hidden',
        height:50

    },
    logo:{
        padding:10,
    },
    inp:{
        width:"100%",
    },button: {
      width: "40%",
      padding: 5,
      borderRadius: 10,
      alignSelf:'center'
    }
  });
  

