import React,{useState,useEffect} from 'react';
import { Image, View, StyleSheet,ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as permission from 'expo-permissions';
import * as imagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import Screen from '../Components/Screen';
import AppText from '../Components/AppText.android';
import dstyles from '../config/styles';
import {registration} from '../config/api';



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    firstName: Yup.string().required().label("FirstName"),
    lastName: Yup.string().required().label("LastName"),
    companyName: Yup.string().required().label("CompanyName"),
    phone: Yup.string().label("Phone"),
    password: Yup.string().required().min(6).label("Password"),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')

});

function UpdateProfile(props) {
    const navigation = useNavigation()
    const [pickImg,setPickImg] = useState(require("../../assets/noProfile.png"));
    const [access,setaccess] = useState(false);

    
      const handleButton = (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
        
          registration(
            values.firstName,
            values.lastName,
            values.email,
            values.companyName,
            values.phone,
            values.password,
            resetForm
          )
        console.log(values)
          
        }
     

    useEffect(() => {
        
    }, [])

    async function imageSelector(){
        const {granted} =await permission.askAsync(permission.CAMERA)
            setaccess(granted)
            if(!granted)
            alert('You need to allow camera permission...!')
            else{
                try {
                    const result = await imagePicker.launchImageLibraryAsync();
                    if(!result.cancelled)
                    setPickImg({uri:result.uri})
                    } catch (error) {
                        console.log("image load error",error)
                    }
            }
        
    }

    return (
        <ScrollView>
            <Screen>
                <View  style={styles.imgcon} >

                <ImageBackground  style={styles.img} source={pickImg}>

                    <View style={styles.imagePickStyle}>
                    <MaterialCommunityIcons style={styles.icon} name="camera-enhance" onPress={imageSelector}  size={40} color={dstyles.colors.medium} />
                    </View>
                

                </ImageBackground>
                </View>

            <Formik
                initialValues={{firstName: '',lastName:'',email:'',companyName:'',phone:'', password:'',passwordConfirmation:''}}
                onSubmit={handleButton}
                validationSchema={validationSchema}
            >
            {({handleChange,handleSubmit, errors , setFieldTouched,touched}) =>(
                <>
                

                <AppTextInput placeholder={"First Name"}
                name="account"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("firstName")}
                onBlue={() => setFieldTouched("firstName")}
                />
            {touched.firstName && <AppText style={{color: 'red'}}>{errors.firstName}</AppText>}

                <AppTextInput placeholder={"Last Name"}
                    name="account"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange("lastName")}
                    onBlue={() => setFieldTouched("lastName")}
                />
            {touched.lastName && <AppText style={{color: 'red'}}>{errors.lastName}</AppText>}

                <AppTextInput placeholder={"Email"}
                name="email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("email")}
                onBlue={() => setFieldTouched("email")}
                testContentType="emailAddress"
            />
            {touched.email && <AppText style={{color: 'red'}}>{errors.email}</AppText>}
                
            <AppTextInput placeholder={"Company Name"}
                    name="office-building"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange("companyName")}
                    onBlue={() => setFieldTouched("companyName")}
                />
            {touched.companyName && <AppText style={{color: 'red'}}>{errors.companyName}</AppText>}
            
            <AppTextInput placeholder={"Phone (optional)"}
                    name="phone"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    onChangeText={handleChange("phone")}
                    onBlue={() => setFieldTouched("phone")}
                />
            {touched.phone && <AppText style={{color: 'red'}}>{errors.phone}</AppText>}
           
            <AppTextInput placeholder={"Password"}
                name="lock"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlue={() => setFieldTouched("password")}
                textContentType="password"
             />
             <View>
            {touched.password && <AppText style={{color: 'red'}}>{errors.password}</AppText>}
             </View>

             <AppTextInput placeholder={"Confirm Password"}
                name="lock"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={handleChange("passwordConfirmation")}
                onBlue={() => setFieldTouched("passwordConfirmation")}
                textContentType="password"
             />
             <View>
            {touched.passwordConfirmation && <AppText style={{color: 'red'}}>{errors.passwordConfirmation}</AppText>}
             </View>

             

             
            <View style={{margin:20}}>  
                <AppButton title="Update" onPress={handleSubmit} color="secondary"/>
            </View>
                </>
            )}
            </Formik>
            
            </Screen>
            </ScrollView>  
    );
}

const styles = StyleSheet.create({
    img:{
        height:120,
        width:120,
    },icon:{
        opacity: 0.8
    },
    imgcon:{
        height:120,
        width:120,
        alignSelf:'center',
        borderRadius:100,
        margin:10,
        overflow:'hidden',
        borderColor:dstyles.colors.danger,
    },
    imgtext:{
        color:dstyles.colors.medium,
        fontSize:12
    },
    imagePickStyle:{
        width:120,
        height:120,
        justifyContent: "center",
        alignItems:"center",
        borderRadius:50,
    }
})

export default UpdateProfile;