import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Awesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from '../../components/Header'
import style from './style'

export default function Profile(props) {
  const { userData } = useSelector(state => state.user)
  return (
    <>
      <Header {...props} />
      <View style={style.container}>
        <Text style={style.title}>My Profile</Text>
        <View style={style.subtitleContainer}>
          <Text style={style.subtitle}>Your Information</Text>
          <Text style={style.edit} onPress={() => props.navigation.navigate('EditProfile')}>edit</Text>
        </View>
        <View style={style.card}>
          <Image source={userData.pictures ? {uri: userData.pictures} : require('../../assets/img/profpict.png')} style={style.profpict} />
          <View style={style.info}>
            <Text style={style.name}>{userData.username ? userData.username : 'Display Name'}</Text>
            <Text style={style.email}>{userData.email}</Text>
            <View style={style.border}></View>
            <Text style={style.email}>{userData.phone}</Text>
            <View style={style.border}></View>
            <Text style={style.email}>{userData.address ? userData.address : 'Your Address'}</Text>
          </View>
        </View>
        <Pressable style={style.menuCard} onPress={() => props.navigation.navigate('History')}>
          <Text style={style.menu}>Order History</Text>
          <Awesome5 name='chevron-right' size={20} />
        </Pressable>
        <Pressable style={style.menuCard} onPress={() => props.navigation.navigate('EditPasswordProfile')}>
          <Text style={style.menu}>Edit Password</Text>
          <Awesome5 name='chevron-right' size={20} />
        </Pressable>
        <View style={style.menuCard}>
          <Text style={style.menu}>FAQ</Text>
          <Awesome5 name='chevron-right' size={20} />
        </View>
        <View style={style.menuCard}>
          <Text style={style.menu}>Help</Text>
          <Awesome5 name='chevron-right' size={20} />
        </View>
        <Pressable style={style.saveBtn}>
          <Text style={style.saveTxt}>Save Change</Text>
        </Pressable>
      </View>
    </>
  )
}