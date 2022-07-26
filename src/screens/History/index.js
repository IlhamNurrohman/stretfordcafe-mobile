import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import axios from 'axios'
import style from './style'
import HistoryCard from '../../components/HistoryCard'
import { REACT_APP_BE_HOST } from '@env'
// const REACT_APP_BE_HOST = 'http://192.168.93.238:8000';

export default function History(props) {
  const [isDelete, setIsDelete] = useState(false)
  const [menu, setMenu] = useState([])
  const [history, setHistory] = useState([])
  const { token } = useSelector(state => state.auth.userInfo)

  const getHistory = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } }
      const response = await axios.get(`${REACT_APP_BE_HOST}/transactions`, config)
      // const response = await axios.get(URL)
      setHistory(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getHistory()
  }, [])

  return (
    <>
      <Header {...props} />
      <ScrollView style={style.container}>
        <Text style={style.title}>Order History</Text>
        {history.length > 0 && history.map((item, idx) => (
          <HistoryCard key={idx} id={item.id} pictures={item.pictures} name={item.name} sub_total={item.sub_total} size={item.size} delivery_methods_id={item.delivery_methods_id} {...props} />
        ))}
        {/* <Pressable style={isDelete ? style.cardSelect : style.card} onLongPress={() => setIsDelete(!isDelete)}>
          <Image source={require('../../assets/img/image 23.png')} style={style.img} />
          <View style={style.info}>
            <Text style={style.name}>Choco Coffee Latte</Text>
            <Text style={style.price}>IDR 28.000</Text>
            <Text style={style.status}>XL (Extra Large)</Text>
            <Text style={style.delivery}>Delivered [Monday, 2 PM]</Text>
          </View>
        </Pressable> */}
        {/* <Pressable style={isDelete ? style.cardSelect : style.card} onLongPress={() => setIsDelete(!isDelete)}>
          <Image source={require('../../assets/img/hazelnut.png')} style={style.img} />
          <View style={style.info}>
            <Text style={style.name}>Choco Coffee Latte</Text>
            <Text style={style.price}>IDR 28.000</Text>
            <Text style={style.status}>XL (Extra Large)</Text>
            <Text style={style.delivery}>Dine in [Friday, 5 PM]</Text>
          </View>
        </Pressable>
        <Pressable style={isDelete ? style.cardSelect : style.card} onLongPress={() => setIsDelete(!isDelete)}>
          <Image source={require('../../assets/img/image 25.png')} style={style.img} />
          <View style={style.info}>
            <Text style={style.name}>Chicken Wings</Text>
            <Text style={style.price}>IDR 148.000</Text>
            <Text style={style.status}>2 Bowls</Text>
            <Text style={style.delivery}>Pick up at store [Friday, 5 PM]</Text>
          </View>
        </Pressable> */}
      </ScrollView>
    </>
  )
}