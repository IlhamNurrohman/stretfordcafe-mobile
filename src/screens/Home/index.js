import { View, Text, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
// import { REACT_APP_BE_HOST } from '@env'
import style from './style'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import { getUserAction } from '../../redux/actionCreators/user'
const REACT_APP_BE_HOST = 'http://192.168.54.238:8000';

export default function Home(props) {
  const [menu, setMenu] = useState('all')
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState([])

  const { token } = useSelector(state => state.auth.userInfo)
  const dispatch = useDispatch()

  const getProduct = async () => {
    try {
      let URL = `${REACT_APP_BE_HOST}/products`
      if (menu === 'favorite') {
        URL += '/favorite'
      }
      if (menu !== 'favorite') {
        URL += `?limit=5`
      }
      // if(search !== ''){
      //   URL += `&name=${search}`
      // }
      if (menu !== 'favorite' && menu !== 'all') {
        URL += `&categories=${menu}`
      }
      const response = await axios.get(URL)
      setProduct(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProduct()
  }, [menu])
  
  useEffect(() => {
    dispatch(getUserAction(token))
  }, [])

  console.log(product)
  return (
    <View>
      <Header {...props} />
      <View style={style.container}>
        <Text style={style.title}>A good coffee is a good day</Text>
      </View>
      <View style={style.searchContainer}>
        <IconIonicons name='search' size={20} color='#9F9F9F' />
        <TextInput style={style.searchInput} placeholder={'Search'} onChange={(e) => {
          setTimeout(setSearch(e.nativeEvent.text), 3000)
        }} />
      </View>
      <ScrollView horizontal={true} style={style.scrollViewH} showsHorizontalScrollIndicator={false}>
        {/* <View style={style.categoryContainer}> */}
        {/* <FlatList horizontal={true} data={menu} renderItem={CategoryMenu}/> */}
        {/* {menu.map((item, idx) => (
            <Text key={idx} style={style.categoryText}>
              {item.title}
            </Text>
          ))} */}
        <Text style={menu === 'favorite' ? style.categoryTextAct : style.categoryText}
          onPress={() => setMenu('favorite')}
        >Favorite</Text>
        <Text style={menu === 'coffee' ? style.categoryTextAct : style.categoryText}
          onPress={() => setMenu('coffee')}
        >Coffee</Text>
        <Text style={menu === 'noncoffee' ? style.categoryTextAct : style.categoryText}
          onPress={() => setMenu('noncoffee')}
        >Non Coffee</Text>
        <Text style={menu === 'food' ? style.categoryTextAct : style.categoryText}
          onPress={() => setMenu('food')}
        >Food</Text>
        <Text style={menu === 'all' ? style.categoryTextAct : style.categoryText}
          onPress={() => setMenu('all')}
        >All</Text>
        {/* </View> */}
      </ScrollView>
      <ScrollView horizontal={true} style={style.productContainer} showsHorizontalScrollIndicator={false}>
        {product.length > 0 && product.map((item, idx) => (
          <ProductCard key={idx} id={item.id} name={item.name} pictures={item.pictures} price={item.price} {...props} />
        ))}
        <ProductCard />
        <ProductCard />
      </ScrollView>
      {/* <Text style={style.categoryTitle}>Favorite Products</Text>
        <Text style={style.seeAll}>See more</Text> */}
    </View>
  )
}