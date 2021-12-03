import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack';
import ResultsScreen from '../Screens/ResultsScreen';
import ReportScreen from '../Screens/ReportScreen';



const Stack = createStackNavigator();

const ResultsNavigator = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Results" options={{headerShown:false}} component={ResultsScreen} />
      <Stack.Screen name="Report" options={{headerShown:false}}  component={ReportScreen} />
    </Stack.Navigator>
    )
}
    
export default ResultsNavigator

const styles = StyleSheet.create({})
