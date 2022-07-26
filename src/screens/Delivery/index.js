import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Octicons from 'react-native-vector-icons/Octicons'
import Header from '../../components/Header'
import style from './style'
import { currencyFormatter } from '../../helpers/formater'
import { addProductAction } from '../../redux/actionCreators/cart'

export default function Delivery(props) {
  const { userData } = useSelector(state => state.user)
  const [delivery, setDelivery] = useState('')
  const { product } = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const proceedHandler = () => {
    const newProduct = {...product, delivery}
    dispatch(addProductAction(newProduct))
    props.navigation.navigate('Payment')
  }

  return (
    <>
      <Header {...props} />
      <View style={style.container}>
        <Text style={style.title}>Delivery</Text>
        <View style={style.subtitleContainer}>
          <Text style={style.subtitle}>Address details</Text>
          <Text style={style.change}>change</Text>
        </View>
        <View style={style.addressCard}>
          <Text style={style.address}>{userData.username ? userData.username : 'Display Name'}</Text>
          <View style={style.border}></View>
          <Text style={style.phone}>{userData.address ? userData.address : 'Address location'}</Text>
          <View style={style.border}></View>
          <Text style={style.phone}>{userData.phone ? userData.phone : '+62 81348287878'}</Text>
        </View>
        <View style={style.subtitleContainer}>
          <Text style={style.subtitle}>Delivery methods</Text>
        </View>
        <View style={style.addressCard}>
          <Text style={style.delivery} onPress={() => setDelivery('Delivery')}>
            <Octicons name={delivery === 'Delivery' ? 'dot-fill' : 'dot'} size={15} color={'#6A4029'} /> Door delivery
          </Text>
          <View style={style.border}></View>
          <Text style={style.delivery} onPress={() => setDelivery('Pickup')}>
            <Octicons name={delivery === 'Pickup' ? 'dot-fill' : 'dot'} size={15} color={'#6A4029'} /> Pick up at store
          </Text>
          <View style={style.border}></View>
          <Text style={style.delivery} onPress={() => setDelivery('Dine In')}>
            <Octicons name={delivery === 'Dine In' ? 'dot-fill' : 'dot'} size={15} color={'#6A4029'} /> Dine in
          </Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={style.subtitle}>Total</Text>
          <Text style={style.subtitle}>{currencyFormatter.format(product.subtotal)}</Text>
        </View>
        <Pressable style={style.paymentBtn} onPress={proceedHandler}>
          <Text style={style.paymentTxt}>Proceed to payment</Text>
        </Pressable>
      </View>
    </>
  )
}