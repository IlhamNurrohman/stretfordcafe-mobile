import { View, Text, ImageBackground, Pressable, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

import style from './style'

export default function Forgot() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    phoneNumber: ''
  })
  return (
    <ImageBackground source={require('../../assets/img/forgot-bg.jpg')} style={style.imgBg}>
      <View style={style.imageBgClr}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Don't Worry!</Text>
          <Text style={style.subtitle}>We've just sent a link to your email to request a new password</Text>
        </View>
        <View style={style.btnContainer}>
          <TextInput style={style.input} placeholder='Enter your email address' placeholderTextColor='#cccccc' 
          keyboardType='email-address'
          onChange={(e)=> setInput({...input, email: e.nativeEvent.text})}
          />
          
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Send Link</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}