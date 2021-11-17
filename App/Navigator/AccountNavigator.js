import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../Screens/AccountScreen';
import UpdateProfile from '../Screens/UpdateProfile';
import Premium from '../Screens/Premium';
import PreviousResult from '../Screens/PreviousResult';
import ChangePassowrd from '../Screens/ChangePassowrd';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Account" options={{headerShown:false}} component={AccountScreen} />
      <Stack.Screen name="Update Profile" options={{headerShown:false}}  component={UpdateProfile} />
      <Stack.Screen name="Premium" options={{headerShown:false}}  component={Premium} />
      <Stack.Screen name="Previous results" options={{headerShown:false}}  component={PreviousResult} />
      <Stack.Screen name="Change Password" options={{headerShown:false}}  component={ChangePassowrd} />
    </Stack.Navigator>
     
    )
}
    
export default AccountNavigator

const styles = StyleSheet.create({})
