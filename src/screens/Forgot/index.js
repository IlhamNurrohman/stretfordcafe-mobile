import { View, Text, ImageBackground, Pressable, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { REACT_APP_BE_HOST } from '@env'
import axios from 'axios'

import style from './style'

export default function Forgot(props) {
  const [msg, setMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [input, setInput] = useState({
    email: '',
  })

  const forgotHandler = async () => {
    try {
       setIsLoading(true)
       const result = await axios.get(`${REACT_APP_BE_HOST}/auth/forgot-password/${input.email}`)
       console.log(result)
       props.navigation.navigate('ResetPassword')
       setIsLoading(false)
    } catch (error) {
       console.log(error)
       setIsLoading(false)
    }
 }

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
          {isLoading ?
            <Pressable style={style.button}>
              <ActivityIndicator />
            </Pressable>
            :
            <Pressable style={style.button}
              onPress={forgotHandler}
            >
              <Text style={style.buttonText}>{isLoading ? 'Loading..' : 'Send Link'}</Text>
            </Pressable>
          }
          {/* <Pressable style={style.button}>
            <Text style={style.buttonText} onPress={forgotHandler}>Send Link</Text>
          </Pressable> */}
        </View>
      </View>
    </ImageBackground>
  )
}