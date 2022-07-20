import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'


export default function HistoryCard({ id, name, sub_total, pictures, size, delivery_methods_id }) {
  return (
    // <Pressable style={style.card} key={id} onPress={()=> navigation.navigate('Product', {id})}>
    //   <Image source={pictures ? { uri: pictures } : require('../assets/img/hazelnut.png')} style={style.img} />
    //   <View style={style.textContainer}>
    //     <Text style={style.name}>{name ? name : 'Hazelnut Latte'}</Text>
    //     <Text style={style.price}>{price ? price : 'IDR 25.000'}</Text>
    //   </View>
    // </Pressable>
    <Pressable style={style.card} key={id}>
    <Image source={pictures ? { uri: pictures } : require('../assets/img/hazelnut.png')} style={style.img} />
    <View style={style.info}>
      <Text style={style.name}>{name ? name : 'Hazelnut Latte'}</Text>
      <Text style={style.price}>{sub_total ? sub_total : 'IDR 25.000'}</Text>
      <Text style={style.size}>{size ? size : 'R'}</Text>
      <Text style={style.delivery}>{delivery_methods_id ? delivery_methods_id : 'IDR 25.000'}</Text>
    </View>
  </Pressable>
  )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        paddingHorizontal: '5%',
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 10
      },
      img: {
        width: 100,
        height: 100,
        borderRadius: 50
      },
      info: {
        marginLeft: 20,
        flexShrink: 1
      },
      name: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#000000'
      },
      price: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#895537'
      },
      status: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#6A4029'
      },
})