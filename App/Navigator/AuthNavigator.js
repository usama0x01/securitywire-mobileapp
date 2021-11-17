import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import AccountScreen from '../Screens/AccountScreen';
import ScanScreen from '../Screens/ScanScreen'
import { NavigationContainer } from '@react-navigation/native';
import Loading from '../Screens/Loading';


const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
      <Stack.Screen name="Login"  component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} /> 
      <Stack.Screen name="Loading" component={Loading} /> 
    </Stack.Navigator>
     
    )
}

export default AuthNavigator

const styles = StyleSheet.create({})
