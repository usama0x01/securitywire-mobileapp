import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { ActivityIndicator,StyleSheet, Text, View } from 'react-native';
import AccountScreen from './App/Screens/AccountScreen';
import LoginScreen from './App/Screens/LoginScreen';
import SignupScreen from './App/Screens/SignupScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen'
import ScanScreen from './App/Screens/ScanScreen'
import Dashboard from './App/Screens/Dashboard'
import AuthNavigator from './App/Navigator/AuthNavigator';
import NavTheme from './App/Navigator/navigationTheme';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './App/Navigator/AppNavigator';
import Loading from './App/Screens/Loading';



export default function App() {
  
return (
  //  <WelcomeScreen/>
  // <NavigationContainer theme={NavTheme}>
  //       <AuthNavigator/>
  //     </NavigationContainer>
  //  <Test/>
  // <View style={styles.container}>
  //     <ActivityIndicator size='large' />
  //   </View>
   
    <NavigationContainer theme={NavTheme}>
            <Loading/>
    </NavigationContainer>
    
  // <NavigationContainer theme={NavTheme}>
  //   <AppNavigator/>
  // </NavigationContainer>
  // //<LoginScreen/>
  // <SignupScreen/>
  //<AccountScreen/>

);
 
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});