import { View, Text, Image,TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import {style} from './Style/RegisterStyle'
import { FacebookImg, GoogleImg, LockImg, ProfileImg, RegisterImg } from '../../theme/Images'
// { ScrollView } from 'react-native-gesture-handler'
// { TextInput } from 'react-native-gesture-handler'
const Register = ({navigation}) => {
  return (
   <>
      <View style={style.container}>
        <ScrollView>
        <Image source={RegisterImg} style={style.Loginimg} />
        <View style={style.mainContainer}>
          <Text style={style.WelcomeText}>Welcome </Text>
          <View style={style.LoginInputView}>
            <Image source={ProfileImg} style={style.proflileImage} />
            <TextInput placeholder="Enter User Name" style={style.loginInput} />
          </View>
          <View style={style.LoginInputView}>
            <Image source={ProfileImg} style={style.proflileImage} />
            <TextInput placeholder="Enter Email" style={style.loginInput} />
          </View>
          <View style={style.LoginInputView}>
            <Image source={LockImg} style={style.proflileImage} />
            <TextInput placeholder="Password" style={style.loginInput} />
          </View>
          <Text style={style.forgotText}>Forgot Password</Text>

          <TouchableOpacity style={style.SignInBtn} onPress={()=>navigation.navigate('MainNavigation')}>
            <Text style={style.btnText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={style.TextContinue}>Or Continue With</Text>
        </View>
        <View style={style.socialIcon}>
          <View style={style.bgImg}>
            <Image source={GoogleImg} style={style.googleImg} />
          </View>
          <View style={style.bgImg}>
            <Image source={FacebookImg} style={style.googleImg} />
          </View>
          
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={style.signUp}>Have an account?Sign In</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  
  )
}

export default Register