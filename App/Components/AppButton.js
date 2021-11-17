import React from 'react';
import { TouchableOpacity,Text, View } from 'react-native';
import colors from '../config/colors';

function AppButton(props) {
    return (
        <TouchableOpacity onPress = {props.onPress}>
    <View style = {{backgroundColor: colors[props.color], alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 25,height:50, width:"100%"}}
           >
        <Text style = {{color: colors.white}}>{props.title}</Text>
    </View>
</TouchableOpacity>
    );
}

export default AppButton;