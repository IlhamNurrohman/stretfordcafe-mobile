import { View, Text, Pressable, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REACT_APP_BE_HOST } from '@env'
import style from './style'
import Octicons from 'react-native-vector-icons/Octicons'
import Header from '../../components/Header'
import { currencyFormatter } from '../../helpers/formater'
import axios from 'axios'
import { sendLocalNotification } from '../../helpers/nofitication'
// const REACT_APP_BE_HOST = 'http://192.168.32.238:8000';


export default function Payment(props) {
  const [payment, setPayment] = useState('')
  const [loading, setLoading] = useState(false)
  const { product } = useSelector(state => state.cart)
  const { userInfo, isLoading } = useSelector(state => state.auth)
  const { id } = useSelector(state => state.user.userData)

  const paymentHandler = async () => {
    try {
      const date = new Date(Date.now())
      const created_at = new Date(Date.now())
      setLoading(true)
      
      const body = {
        date,
        sub_total: product.subtotal,
        payment_methods_id: payment,
        products_id: product.id,
        qty: product.quantity,
        users_id: id,
        delivery_methods_id: product.delivery,
        promos_id: product.promo,
        created_at
      }
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
      const response = await axios.post(`${REACT_APP_BE_HOST}/transactions`, body, config)
      console.log(response)
      console.log('SUCCESS')
      setLoading(false)
      sendLocalNotification(
        'Payment Status',
        'Payment successfully, please check your history for detail!',
      );
    } catch (error) {
      console.log(error)
      console.log('ERROR')
      setLoading(false)
    }
  }
  const dispatch = useDispatch()
  return (
    <>
      <Header {...props} />
      <View style={style.container}>
        <View style={style.subtitleContainer}>
          <Text style={style.subtitle}>Products</Text>
        </View>
        <View style={style.card}>
          <Image source={product.pictures ? { uri: product.pictures } : require('../../assets/img/hazelnut.png')} style={style.img} />
          <View style={style.productInfo}>
            <Text style={style.item}>{product.name ? product.name : 'Hazelnut Latte'}</Text>
            <Text style={style.item}>{`x${product.quantity}`}</Text>
            <Text style={style.item}>{product.size === '2' ? 'Regular' : product.size === '3' ? 'Large' : 'Extra Large'}</Text>
          </View>
          <Text style={style.price}>{currencyFormatter.format(product.subtotal)}</Text>
        </View>
        <View style={style.subtitleContainer}>
          <Text style={style.subtitle}>Payment method</Text>
        </View>
        <View style={style.methodCard}>
          <Text style={style.delivery} onPress={() => setPayment('1')}>
            <Octicons name={payment === '1' ? 'dot-fill' : 'dot'} size={15} color={'#6A4029'} /> Card
          </Text>
          <View style={style.border}></View>
          <Text style={style.delivery} onPress={() => setPayment('3')}>
            <Octicons name={payment === '3' ? 'dot-fill' : 'dot'} size={15} color={'#6A4029'} /> Bank account
          </Text>
          <View style={style.border}></View>
          <Text style={style.delivery} onPress={() => setPayment('8')}>
            <Octicons name={payment === '8' ? 'dot-fill' : 'dot'} size={15} color={'#6A4029'} /> Cash on delivery
          </Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={style.subtitle}>Total</Text>
          <Text style={style.subtitle}>{currencyFormatter.format(product.subtotal)}</Text>
        </View>
        {/* <Pressable style={style.paymentBtn} onPress={paymentHandler}>
          <Text style={style.paymentTxt}>Proceed payment</Text>
        </Pressable> */}
        {isLoading ?
            <Pressable style={style.paymentBtn}>
              <ActivityIndicator />
            </Pressable>
            :
            <Pressable style={style.paymentBtn} onPress={paymentHandler}>
              <Text style={style.paymentTxt}>{isLoading ? 'Loading..' : 'Proceed payment'}</Text>
            </Pressable>
          }
      </View>
    </>
  )
}