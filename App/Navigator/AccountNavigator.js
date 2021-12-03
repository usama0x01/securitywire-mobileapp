import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../Screens/AccountScreen';
import UpdateProfile from '../Screens/UpdateProfile';
import Loading from '../Screens/Loading';
import ChangePassowrd from '../Screens/ChangePassowrd';
import AuthNavigator from '../Navigator/AuthNavigator';


const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Account" options={{headerShown:false}} component={AccountScreen} />
      <Stack.Screen name="Update Profile" options={{headerShown:false}}  component={UpdateProfile} />
      <Stack.Screen name="Change Password" options={{headerShown:false}}  component={ChangePassowrd} />
      <Stack.Screen name="AuthNavigator" options={{headerShown:false}}  component={AuthNavigator} />
      <Stack.Screen name="Loading" options={{headerShown:false}}  component={Loading} />
    </Stack.Navigator>
     
    )
}
    
export default AccountNavigator

const styles = StyleSheet.create({})
