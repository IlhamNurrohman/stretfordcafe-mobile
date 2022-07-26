import { View, Text, ImageBackground, TextInput, Image, Pressable, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import Ionicons from 'react-native-vector-icons/Ionicons'

import style from './style'
import { doLogin } from '../../modules/auth'
import { loginAction, logoutAction } from '../../redux/actionCreators/auth'

export default function Login({ navigation }) {
  const [showPass, setShowPass] = useState(false)
  const [body, setBody] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const { userInfo, isLoading, isSuccess, err } = useSelector(state => state.auth)

  const loginHandler = () => {
    dispatch(loginAction(body))
  }

  const showToast = () => {
    ToastAndroid.show('gabisa login nih', ToastAndroid.SHORT)
    navigation.navigate('Drawer')
  }
  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Login Success'
    })
  }
  const errorToast = () => {
    Toast.show({
      type: 'error',
      // text1: err.msg
    })
  }


  // useEffect(() => {
  //   dispatch(logoutAction())
  // }, [])

  useEffect(() => {
    if (isSuccess) {
      successToast()
      navigation.navigate('Drawer')
    }
    if (isSuccess === false) {
      errorToast()
    }
  }, [isSuccess])
  return (
    <ImageBackground source={require('../../assets/img/login-bg.jpg')} style={style.imageBg}>

      <View style={style.imageBgClr}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Login</Text>
        </View>
        <View style={style.btmContainer}>
          <TextInput style={style.input} placeholder='Enter your email address' placeholderTextColor='#cccccc'
            onChange={(e) => { setBody({ ...body, email: e.nativeEvent.text }) }}
          />
          <View style={style.passContainer}>
          <TextInput style={style.input} placeholder='Enter your password' placeholderTextColor='#cccccc' secureTextEntry={showPass ? false : true}
            onChange={(e) => { setBody({ ...body, password: e.nativeEvent.text }) }}
          />
<Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} style={style.eye} onPress={() => setShowPass(!showPass)} />
          </View>
          <Pressable onPress={() => navigation.navigate('Forgot')}>
            <Text style={style.forgot}>Forgot password?</Text>
          </Pressable>
          {isLoading ?
            <Pressable style={style.loginBtn}>
              <ActivityIndicator />
            </Pressable>
            :
            <Pressable style={style.loginBtn}
              onPress={loginHandler}
            >
              <Text style={style.loginText}>{isLoading ? 'Loading..' : 'Login'}</Text>
            </Pressable>
          }
          <View style={style.info}>
            <View style={style.border}></View>
            <Text style={style.infoText}>or login in with</Text>
            <View style={style.border}></View>
          </View>
          <Pressable style={style.gbutton} onPress={showToast}>
            <Image source={require('../../assets/icons/google.png')} style={style.google} />
            <Text style={style.gbuttonText}>Create with Google</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}