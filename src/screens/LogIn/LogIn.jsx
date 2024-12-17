import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Style/LogInStyle';
import {
  LoginImg,
  ProfileImg,
  GoogleImg,
  LockImg,
  FacebookImg,
} from '../../theme/Images';
//import { TextInput } from 'react-native-gesture-handler';
const LogIn = ({navigation}) => {
  return (
    <>
      <View style={style.container}>
        <Image source={LoginImg} style={style.Loginimg} />
        <View style={style.mainContainer}>
          <Text style={style.WelcomeText}>Welcome Back Again</Text>
          <View style={style.LoginInputView}>
            <Image source={ProfileImg} style={style.proflileImage} />
            <TextInput placeholder="Enter User Name" style={style.loginInput} />
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
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={style.signUp}>Don't have an account?Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LogIn;
