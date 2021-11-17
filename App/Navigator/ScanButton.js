import React from 'react'
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
const ScanButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container} >
            <MaterialCommunityIcons name="search-web" size={30} color={colors.white} />
        </View>
        </TouchableOpacity>
        
    )
}

export default ScanButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.medium,
        width:80,
        height:80,
        borderRadius:50,
        borderColor:colors.light,
        borderWidth:7,
        bottom:20,
        justifyContent:"center",
        alignItems:"center"
    },
   
})
