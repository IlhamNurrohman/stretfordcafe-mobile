import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import style from './style'
import { currencyFormatter } from '../../helpers/formater'
import { addProductAction } from '../../redux/actionCreators/cart'

export default function Cart(props) {
  const [quantity, setQuantity] = useState(1)
  const [promo, setPromo] = useState('')

  const { product } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const itemTotal = product.price * quantity
  const delivery = 0
  const tax = 10000
  const subtotal = itemTotal + delivery + tax

  const checkoutHandler = () => {
    const newProduct = {...product, subtotal, promo, quantity}
    dispatch(addProductAction(newProduct))
    props.navigation.navigate('Delivery')
  }
  return (
    <>
      <Header {...props} />
      <View style={style.container}>
        <View style={style.cartContainer}>
          <View style={style.cardProduct}>
            <Image source={product.picture ? {uri: product.picture} : require('../../assets/img/hazelnut.png')} style={style.img} />
            <Text style={style.price}>{currencyFormatter.format(product.price)}</Text>
          </View>
          <View style={style.rightCart}>
            <Text style={style.name}>{product.name}</Text>
            <View style={style.quantityContainer}>
              <Text style={style.counter} onPress={() => setQuantity(quantity === 1 ? quantity : quantity - 1)}>-</Text>
              <Text style={style.quantity}>{quantity}</Text>
              <Text style={style.counter} onPress={() => setQuantity(quantity + 1)}>+</Text>
            </View>
          </View>
        </View>
        <Pressable style={style.couponBtn}>
          <Text style={style.couponText}>
            Apply Delivery Coupons
          </Text>
        </Pressable>
        <View style={style.infoContainer}>
          <View style={style.infoRow}>
            <Text style={style.infoLeft}>Item Total</Text>
            <Text style={style.infoRight}>{currencyFormatter.format(itemTotal)}</Text>
          </View>
          <View style={style.infoRow}>
            <Text style={style.infoLeft}>Delivery Charge</Text>
            <Text style={style.infoRight}>{currencyFormatter.format(delivery)}</Text>
          </View>
          <View style={style.infoRow}>
            <Text style={style.infoLeft}>Tax</Text>
            <Text style={style.infoRight}>{currencyFormatter.format(tax)}</Text>
          </View>
        </View>
        <View style={style.totalRow}>
          <Text style={style.total}>Total :</Text>
          <Text style={style.total}>{currencyFormatter.format(subtotal)}</Text>
        </View>
        <Pressable style={style.checkoutBtn} onPress={checkoutHandler}>
          <Text style={style.checkoutText}>
            CHECKOUT
          </Text>
        </Pressable>
      </View>
    </>
  )
}