import { View, Text, ImageBackground, Pressable, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import { REACT_APP_BE_HOST } from '@env'
import { getUserAction } from '../../redux/actionCreators/user'
import Toast from 'react-native-toast-message'

import style from './style'

export default function EditPasswordProfile(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [input, setInput] = useState({
        password: '',
        password2: '',
    })
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.user)
    const { userInfo } = useSelector(state => state.auth)

    const successToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Update Success'
        })
    }

    const updateHandler = async () => {
        try {
            setLoading(true)
            if (input.password !== input.password2){
                return console.log('Gagal')
            }
            const body = { password: input.password }
            // let newBody = new FormData()
            // newBody.append('password', body.password);

            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            const response = await axios.patch(`${REACT_APP_BE_HOST}/users/update-password`, body, config)
            console.log(body)
            console.log('SUCCESS')
            setIsSuccess(true)
            successToast()
            setLoading(false)
            props.navigation.navigate('Profile')
        } catch (error) {
            console.log('FAILED')
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(getUserAction(userInfo.token))
        }
    }, [isSuccess])

    // console.log(body.password)
    return (
        <ImageBackground source={require('../../assets/img/forgot-bg.jpg')} style={style.imgBg}>
            <View style={style.imageBgClr}>
                <View style={style.titleContainer}>
                    <Text style={style.title}>Update Password</Text>
                    {/* <Text style={style.subtitle}>We've just sent a link to your email to request a new password</Text> */}
                </View>
                <View style={style.btnContainer}>
                    <View style={style.passContainer}>
                        <TextInput style={style.input} placeholder='Enter new password' placeholderTextColor='#cccccc' secureTextEntry={showPass ? false : true}
                            onChangeText={password => setInput({ ...input, password })}
                        />
                        <Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} style={style.eye} onPress={() => setShowPass(!showPass)} />
                    </View>
                    <View style={style.passContainer}>
                        <TextInput style={style.input} placeholder='Enter confirm password' placeholderTextColor='#cccccc' secureTextEntry={showPass ? false : true}
                            onChangeText={password2 => setInput({ ...input, password2 })}
                        />
                        <Ionicons name={showPass2 ? 'eye-outline' : 'eye-off-outline'} style={style.eye} onPress={() => setShowPass2(!showPass2)} />
                    </View>
                    {isLoading ?
                        <Pressable style={style.button}>
                            <ActivityIndicator />
                        </Pressable>
                        :
                        <Pressable style={style.button}
                            onPress={updateHandler}
                        >
                            <Text style={style.buttonText}>{isLoading ? 'Loading..' : 'Save'}</Text>
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