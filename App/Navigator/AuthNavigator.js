import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignupScreen from '../Screens/SignupScreen';
import LoginScreen from '../Screens/LoginScreen';
import AccountScreen from '../Screens/AccountScreen';
import ScanScreen from '../Screens/ScanScreen'
import { NavigationContainer } from '@react-navigation/native';
import Loading from '../Screens/Loading';


const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
      <Stack.Screen name="Login" options={{headerShown:false}}  component={LoginScreen} />
      <Stack.Screen name="Signup" options={{headerShown:false}} component={SignupScreen} /> 
      <Stack.Screen name="Loading" options={{headerShown:false}} component={Loading} /> 
    </Stack.Navigator>
     
    )
}

export default AuthNavigator

const styles = StyleSheet.create({})
