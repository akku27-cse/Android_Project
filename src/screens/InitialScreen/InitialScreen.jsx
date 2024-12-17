import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Style/Initial'
import {welcomeImg} from '../../theme/Images';
import Navigation from './../../Navigation/Navigation';

const InitialScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#20bf55" />
      <View style={style.container}>
        <View style={style.mainContainer}>
          <View style={style.ImageContainer}>
            <Image source={welcomeImg} style={style.img} />

            <View>
              <Text style={style.text}>A Task Manager You Can Trust</Text>
              <Text style={style.textSub}>
                This App help users organize, manage, and prioritize tasks. It
                typically allows users to create task lists, set deadlines,
                categorize items, and track progress.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Login')}>
            <Text style={style.BtnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default InitialScreen;
