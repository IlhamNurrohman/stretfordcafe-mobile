import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'


export default function ProductCard({ id, name, price, pictures, navigation }) {
  return (
    <Pressable style={style.card} key={id} onPress={()=> navigation.navigate('Product', {id})}>
      <Image source={pictures ? { uri: pictures } : require('../assets/img/hazelnut.png')} style={style.img} />
      <View style={style.textContainer}>
        <Text style={style.name}>{name ? name : 'Hazelnut Latte'}</Text>
        <Text style={style.price}>{price ? price : 'IDR 25.000'}</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    width: 150,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20
  },
  img: {
    width: 130,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 15
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#000000'
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    textAlign: 'center',
    color: '#6A4029'
  },
})