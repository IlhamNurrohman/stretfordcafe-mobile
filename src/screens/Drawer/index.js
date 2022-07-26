import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Awesome5 from 'react-native-vector-icons/FontAwesome5'
import style from './style';
import { logoutAction } from '../../redux/actionCreators/auth';
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.user)
  return (
    <>
      <View style={style.container}>
        <View style={style.profileContainer}>
          <Image source={userData.pictures ? {uri: userData.pictures} : require('../../assets/img/profpict.png')} style={style.profpict} />
          <Text style={style.username}>{userData.username ? userData.username : 'Display Name'}</Text>
          <Text style={style.email}>{userData.email}</Text>
        </View>
        <View style={style.menuContainer}>
          <Pressable style={style.menuList} onPress={() => props.navigation.navigate('Profile')}>
            <Ionicons name='person-circle-outline' size={35} color='#6A4029' />
            <Text style={style.menuText}>Profile</Text>
          </Pressable>
          <Pressable style={style.menuList} onPress={() => props.navigation.navigate('Cart')}>
            <Material name='cart-arrow-down' size={35} color='#6A4029' />
            <Text style={style.menuText}>Orders</Text>
          </Pressable>
          <Pressable style={style.menuList} onPress={()=> props.navigation.navigate('Home', {category: 'all'})}>
            <Ionicons name='fast-food-outline' size={35} color='#6A4029' />
            <Text style={style.menuText}>All menu</Text>
          </Pressable>
          <View style={style.menuList}>
            <Ionicons name='newspaper-outline' size={35} color='#6A4029' />
            <Text style={style.menuText}>Privacy policy</Text>
          </View>
          <View style={style.menuList}>
            <Awesome5 name='shield-alt' size={35} color='#6A4029' />
            <Text style={style.menuText}>Security</Text>
          </View>
        </View>
        <Pressable style={style.menuList} onPress={() => {
          dispatch(logoutAction())
          props.navigation.navigate("Start")
        }}>
          <Material name='logout' size={35} color='#6A4029' />
          <Text style={style.menuText}>Logout</Text>
        </Pressable>
        {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem />
      </DrawerContentScrollView> */}
      </View>
    </>
  );
}

export default MyDrawer