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
    const [isSuccess, setIsSuccess] = useState(false)
    const [input, setInput] = useState({
        email: '',
        newPassword: '',
        confirmCode: '',
    })
    // const dispatch = useDispatch()
    // const { userInfo } = useSelector(state => state.auth)

    const successToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Update Success'
        })
    }

    const resetHandler = async () => {
        try {
            setLoading(true)
            const body = { 
                email: input.email,
                newPassword: input.newPassword,
                confirmCode: input.confirmCode
            }
            // let newBody = new FormData()
            // newBody.append('password', body.password);

            // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            console.log(body)
            const response = await axios.patch(`${REACT_APP_BE_HOST}/users/edit-password`, body)
            
            console.log('SUCCESS')
            setIsSuccess(true)
            successToast()
            setLoading(false)
            props.navigation.navigate('Login')
        } catch (error) {
            console.log('FAILED')
            console.log(error.response.data)
            setLoading(false)
        }
    }
    // useEffect(() => {
    //     if (isSuccess) {
    //         dispatch(getUserAction(userInfo.token))
    //     }
    // }, [isSuccess])

    // console.log(input)
    return (
        <ImageBackground source={require('../../assets/img/forgot-bg.jpg')} style={style.imgBg}>
            <View style={style.imageBgClr}>
                <View style={style.titleContainer}>
                    <Text style={style.title}>Reset Password</Text>
                    {/* <Text style={style.subtitle}>We've just sent a link to your email to request a new password</Text> */}
                </View>
                <View style={style.btnContainer}>
                    <View style={style.passContainer}>
                        <TextInput style={style.input} placeholder='Enter your email' placeholderTextColor='#cccccc' 
                            onChangeText={email => setInput({ ...input, email })}
                        />
                    </View>
                    <View style={style.passContainer}>
                        <TextInput style={style.input} placeholder='Enter your password' placeholderTextColor='#cccccc' secureTextEntry={showPass ? false : true}
                            onChangeText={newPassword => setInput({ ...input, newPassword })}
                        />
                        <Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} style={style.eye} onPress={() => setShowPass(!showPass)} />
                    </View>
                    <View style={style.passContainer}>
                        <TextInput style={style.input} placeholder='Enter confirm code' placeholderTextColor='#cccccc' 
                            onChangeText={confirmCode => setInput({ ...input, confirmCode })}
                        />
                    </View>
                    {isLoading ?
                        <Pressable style={style.button}>
                            <ActivityIndicator />
                        </Pressable>
                        :
                        <Pressable style={style.button}
                            onPress={resetHandler}
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