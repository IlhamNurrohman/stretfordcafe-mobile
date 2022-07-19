import { View, Text, ImageBackground, TextInput, Image, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import style from './style'
import { loginAction } from '../../redux/actionCreators/auth'

export default function Login({ navigation }) {
  const [body, setBody] = useState({
    email: '',
    password: ''
  })
  // const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { userInfo, isLoading, isSuccess } = useSelector(state => state.auth)

  const loginHandler = () => {
    dispatch(loginAction(body))
  }

  const showToast = () => {
    ToastAndroid.show('', ToastAndroid.SHORT)
  }

  useEffect(()=>{
    if(isSuccess){
      navigation.navigate('Drawer')
    }
    
  },[isSuccess])
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
          <TextInput style={style.input} placeholder='Enter your password' placeholderTextColor='#cccccc' secureTextEntry={true}
            onChange={(e) => { setBody({ ...body, password: e.nativeEvent.text }) }}
          />
          <Pressable onPress={()=> navigation.navigate('Forgot')}>
            <Text style={style.forgot}>Forgot password?</Text>
          </Pressable>
          <Pressable style={style.loginBtn}
            onPress={loginHandler}
          >
            <Text style={style.loginText}>{isLoading ? 'Loading..' : 'Login'}</Text>
          </Pressable>
          <View style={style.info}>
            <View style={style.border}></View>
            <Text style={style.infoText}>or login in with</Text>
            <View style={style.border}></View>
          </View>
          <Pressable style={style.gbutton} onPress="">
            <Image source={require('../../assets/icons/google.png')} style={style.google} />
            <Text style={style.gbuttonText}>Create with Google</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}