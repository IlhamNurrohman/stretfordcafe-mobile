import { View, Text, Image, TextInput, Pressable, ActivityIndicator, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DatePicker from 'react-native-date-picker'
import { REACT_APP_BE_HOST } from '@env'
// const REACT_APP_BE_HOST = 'http://192.168.32.238:8000';
import Toast from 'react-native-toast-message'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Button } from '@rneui/base';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ion from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Header from '../../components/Header'
import style from './style'
import moment from 'moment'
import axios from 'axios'
import { getUserAction } from '../../redux/actionCreators/user'

export default function EditProfile(props) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [modal, setModal] = useState({
    modalUpload: false,
    modalStatus: false,
  });
  const [body, setBody] = useState({
    username: '',
    email: '',
    gender: '',
    phone: '',
    date: '',
    address: '',
    pictures: null,
  })
  const [message, setMessage] = useState({
    success: '',
    error: '',
  });
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.user)
  const { userInfo } = useSelector(state => state.auth)

  useEffect(() => {
    setBody(userData)
  }, [])


  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Update Success'
    })
  }

  const openCam = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    try {
      const result = await launchCamera(options);
      setFile({
        name: result.assets[0].fileName,
        size: result.assets[0].fileSize,
        type: result.assets[0].type,
        uri: result.assets[0].uri,
        height: result.assets[0].height,
        width: result.assets[0].width,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const openStorage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    try {
      const result = await launchImageLibrary(options);
      setFile({
        name: result.assets[0].fileName,
        size: result.assets[0].fileSize,
        type: result.assets[0].type,
        uri: result.assets[0].uri,
        height: result.assets[0].height,
        width: result.assets[0].width,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = async () => {
    try {
      setLoading(true)
      const { phone, username, address, date, gender, email } = body
      let newBody = new FormData()
      newBody.append('pictures', file);
      newBody.append('phone', phone);
      newBody.append('email', email);
      newBody.append('username', username);
      newBody.append('address', address);
      newBody.append('date', date);
      newBody.append('gender', gender);

      const config = { headers: { Authorization: `Bearer ${userInfo.token}`, "content-type": "multipart/form-data" } }
      const response = await axios.patch(`${REACT_APP_BE_HOST}/users`, newBody, config)
      console.log(response)
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
  return (
    <>
      <Header {...props} />
      <View style={style.container}>
        <Text style={style.title}>Edit Profile</Text>
        <View style={style.imgContainer}>
          <Image source=
          {
            file && file.uri
                ? {uri: file.uri}
                : body.file
                ? {uri: body.file}
                : userInfo.pictures
                ? {uri: userInfo.pictures}
                : require('../../assets/img/profpict.png')} 
                style={style.profpict} />
          <Pressable style={style.pencilContainer}
            onPress={() => {
              setModal({ ...modal, modalUpload: true });
            }}>
            <SimpleLineIcons name='pencil' size={20} color={'#ffffff'} style={style.pencil} />
          </Pressable>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.label}>Name :</Text>
          <TextInput placeholder='Input Your Name' style={style.input} value={body.username} onChange={(e) => setBody({ ...body, username: e.nativeEvent.text })} />
          <View style={style.border}></View>
        </View>
        <View style={style.genderContainer}>
          <Text style={body.gender === 'female' ? style.genderActive : style.gender} onPress={() => setBody({ ...body, gender: 'female' })}>
            <Fontisto name={body.gender === 'female' ? 'radio-btn-active' : 'radio-btn-passive'} style={style.radio} />
            Female
          </Text>
          <Text style={body.gender === 'male' ? style.genderActive : style.gender} onPress={() => setBody({ ...body, gender: 'male' })}>
            <Fontisto name={body.gender === 'male' ? 'radio-btn-active' : 'radio-btn-passive'} style={style.radio} />
            Male
          </Text>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.label}>Email Adress :</Text>
          <TextInput placeholder='Input Your Email' style={style.input} value={body.email} editable={false} />
          <View style={style.border}></View>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.label}>Phone Number :</Text>
          <TextInput placeholder='Input Your Phone Number' style={style.input} value={body.phone} onChange={(e) => setBody({ ...body, phone: e.nativeEvent.text })} keyboardType={'number-pad'} />
          <View style={style.border}></View>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.label}>Date of Birth</Text>
          <View style={style.dateInput}>
            <TextInput placeholder='Input Your Date of Birth' style={style.input} value={body.date} />
            <FontAwesome name='calendar' size={20} onPress={() => setOpen(true)} />
            <DatePicker modal open={open} date={body.date ? new Date(body.date) : new Date()} mode='date'
              onConfirm={date => {
                setOpen(false)
                // console.log(moment(date).format('YYYY-MM-DD'))
                setBody({ ...body, date: moment(date).format('YYYY-MM-DD') })
              }}
              onCancel={() => setOpen(false)} />
          </View>
          <View style={style.border}></View>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.label}>Delivery Address :</Text>
          <TextInput placeholder='Input Your Address' style={style.input} value={body.address} onChange={(e) => setBody({ ...body, address: e.nativeEvent.text })} />
          <View style={style.border}></View>
        </View>
        {loading ?
          <Pressable style={style.saveBtn}>
            <ActivityIndicator />
          </Pressable>
          :
          <Pressable style={style.saveBtn} onPress={updateHandler}>
            <Text style={style.saveTxt}>
              Save and Update
            </Text>
          </Pressable>
        }
      </View>
      <Toast />
      <Modal
        visible={modal.modalUpload}
        transparent={true}
        animationType="slide">
        <View style={style.modalContainer}>
          <View style={style.modalBody}>
            <Text style={style.titleModal}>Upload Photo</Text>
            <View style={style.containerBtnUpload}>
              <Button
                onPress={openStorage}
                buttonStyle={style.btnUpload}>
                Choose from library
              </Button>
              <Button
                onPress={openCam}
                buttonStyle={style.btnUpload}>
                Take a Photo
              </Button>
              <Button
                onPress={() => {
                  setModal({ ...modal, modalUpload: false });
                }}
                buttonStyle={style.btnUpload}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}