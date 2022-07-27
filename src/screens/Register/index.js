import { View, Text, ImageBackground, Pressable, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'
import Ionicons from 'react-native-vector-icons/Ionicons'
import style from './style'
import { doRegister } from '../../modules/auth'

export default function Register({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [isSuccess, setIsSuccess] = useState(null)
  const [msg, setMsg] = useState('')
  const [input, setInput] = useState({
    email: '',
    password: '',
    phone: ''
  })
  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Register Success Please Login'
    })
  }
  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: msg
    })
  }
  useEffect(() => {
    if (isSuccess === true) {
      successToast()
      navigation.navigate('Login')
    }
    if (isSuccess === false) {
      errorToast()
    }
  }, [msg])

  const registerHandler = async () => {
    try {
      if (!input.phone) {
        return setMsg('Input Phone Number')
      }
      setLoading(true)
      setIsSuccess(null)
      const response = await doRegister(input)
      console.log(response)
      // navigation.navigate('Login')
      setIsSuccess(true)
      setMsg(response.data.msg)
      setLoading(false)
    } catch (error) {
      setIsSuccess(false)
      setMsg(error.response.data.err.msg)
      // console.log(error.response.data.err.msg)
      setLoading(false)
    }
  }

  return (
    <ImageBackground source={require('../../assets/img/register-bg.jpg')} style={style.imageBg}>
      <View style={style.imageBgClr}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Sign Up</Text>
        </View>
        <View style={style.btnContainer}>
          <TextInput style={style.input} placeholder='Enter your email address' placeholderTextColor='#cccccc'
            keyboardType='email-address'
            onChange={(e) => setInput({ ...input, email: e.nativeEvent.text })}
          />
          <View style={style.passContainer}>
            <TextInput style={style.inputPass} placeholder='Enter your password' placeholderTextColor='#cccccc' secureTextEntry={showPass ? false : true}
              onChange={(e) => setInput({ ...input, password: e.nativeEvent.text })}
            />
            <Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} style={style.eye} onPress={() => setShowPass(!showPass)} />
          </View>
          <TextInput style={style.input} placeholder='Enter your phone number' placeholderTextColor='#cccccc' keyboardType='numeric'
            onChange={(e) => { setInput({ ...input, phone: e.nativeEvent.text }) }}
          />
          {loading ?
            <Pressable style={style.button}>
              <ActivityIndicator />
            </Pressable>
            :
            <Pressable style={style.button} onPress={registerHandler}>
              <Text style={style.buttonText}>Create Account</Text>
            </Pressable>
          }
          <Pressable style={style.gbutton}>
            <Image source={require('../../assets/icons/google.png')} style={style.google} />
            <Text style={style.gbuttonText}>Create with Google</Text>
          </Pressable>
        </View>
      </View>
      <Toast />
    </ImageBackground>
  )
}