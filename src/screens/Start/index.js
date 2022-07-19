import { View, Text, ImageBackground, Pressable, } from 'react-native';
import React, { useState } from 'react';

import style from './style'


export default function Start({ navigation }) {
  const [page, setPage] = useState('home')
  return (
    <View style={style.container}>
      {page === 'home' ?
        <ImageBackground source={require('../../assets/img/home-bg.png')} style={style.imageBg}>
          <View style={style.imageBgClr}>
            <Text style={style.title}>Coffee for Everyone</Text>
            <View style={style.btnContainer}>
              <Pressable style={style.button} onPress={() => setPage('welcome')}>
                <Text style={style.buttonText}>Get started</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
        :
        <ImageBackground source={require('../../assets/img/welcome-bg.png')} style={style.imageBg}>
          <View style={style.imageBgClr}>
            <View>
              <Text style={style.title}>Welcome!</Text>
              <Text style={style.info}>Get a cup of coffee for free every sunday morning</Text>
            </View>
            <View style={style.btnContainer}>
              <Pressable style={style.buttonReg} onPress={() => navigation.navigate('Register')}>
              {/* <Pressable style={style.buttonReg} onPress={() => navigation.navigate('Register')}> */}
                <Text style={style.regText}>Create New Account</Text>
              </Pressable>
              <Pressable style={style.button} onPress={() => navigation.navigate('Login')}>
                <Text style={style.buttonText}>Login</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>

      }
    </View>
  );
}
