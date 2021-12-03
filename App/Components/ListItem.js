import React from 'react';
import { View,StyleSheet,Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem(props) {
    return (
        <Swipeable renderRightActions={props.renderRightActions}>
        <TouchableHighlight
         underlayColor={colors.light}
         onPress={props.onPress}>
        <View style={style.maincontainer}>
            {props.icon}
           <Image style={{borderRadius: 35}} source={{ 
              height: 70,
              width: 70,
              uri: props.img
            }} />
            <View style={style.container1}>
                <AppText style={style.title}>
                   {props.title}
                </AppText>
                {props.subtitle && <AppText style={[style.subtitle]}>
                    {props.subtitle}
                </AppText>}
                {props.status && <View style={[style.status]}>
                    {props.status}
                </View>}
            </View>
            <View style={style.container1}>
                {props.date && <AppText style={[style.date]}>
                    {props.date}
                </AppText>}
                {props.time && <AppText style={[style.date]}>
                    {props.time}
                </AppText>}
                
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const style = StyleSheet.create({
    maincontainer:{
        flexDirection: "row",
        padding:15,
        backgroundColor: colors.white
    },status:{
       top:5,
       width:125
    },
    container1:{
        marginLeft: 10,
        justifyContent: "center",

    },
    title:{
        color: "black",
        fontSize: 20,
        fontWeight: '700'
        
    },
    subtitle:{
        fontSize: 15,
        fontWeight: '200',
        color: colors.medium
    },
    date:{
        top:20,
        fontSize: 15,
        fontWeight: '200',
        textAlign: "right"
    }
})

export default ListItem;