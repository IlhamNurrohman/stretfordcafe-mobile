import { View, Text, TextInput, ScrollView, FlatList, 
  Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import { REACT_APP_BE_HOST } from '@env'
import style from './style'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import { getUserAction } from '../../redux/actionCreators/user'
// const REACT_APP_BE_HOST = 'http://192.168.214.238:8000';

export default function Home(props) {
  const [menu, setMenu] = useState('all')
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [limit, setLimit] = useState(6)
  const [sort, setSort] = useState('categories')
  const [order, setOrder] = useState('asc')

  const { userInfo } = useSelector(state => state.auth)
  const { userData } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const getProduct = async () => {
    try {
      setLoading(true)
      let URL = `${REACT_APP_BE_HOST}/products`
      if (menu === 'favorite') {
        URL += '/favorite'
      }
      if (menu !== 'favorite') {
        URL += `?limit=${limit}`
      }
      if (search !== '' && menu !== 'favorite') {
        URL += `&find=${search}`
      }
      if (menu !== 'favorite' && menu !== 'all') {
        URL += `&categories=${menu}`
      }
      URL += `&sort=${sort}&order=${order}`
      const response = await axios.get(URL)
      setProduct(response.data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setProduct([])
      setMsg('Product Not Found')
      setLoading(false)
    }
  }

  const getProduct2 = async () => {
    try {
      let URL = `${REACT_APP_BE_HOST}/products`
      if (menu === 'favorite') {
        URL += '/favorite'
      }
      if (menu !== 'favorite') {
        URL += `?limit=${limit}`
      }
      if (search !== '' && menu !== 'favorite') {
        URL += `&find=${search}`
      }
      if (menu !== 'favorite' && menu !== 'all') {
        URL += `&categories=${menu}`
      }
      URL += `&sort=${sort}&order=${order}`
      const response = await axios.get(URL)
      setProduct(response.data.data)
    } catch (error) {
      console.log(error)
      setProduct([])
      setMsg('Product Not Found')
    }
  }

  useEffect(() => {
    getProduct()
  }, [menu, search, sort, order])
  useEffect(() => {
    getProduct2()
  }, [limit])

  useEffect(() => {
    dispatch(getUserAction(userInfo.token))
  }, [])

  // console.log(REACT_APP_BE_HOST)
  return (
    <View>
      <Header {...props} />
      <View style={style.container}>
        <Text style={style.title}>A good coffee is a good day</Text>
      </View>
      <View style={style.searchContainer}>
        <IconIonicons name='search' size={20} color='#9F9F9F' />
        <TextInput style={style.searchInput} placeholder={'Search'} onChange={(e) => {
          // setTimeout(()=> setSearch(e.nativeEvent.text), 3000)
          setSearch(e.nativeEvent.text)
          // console.log(e.nativeEvent.text)
          // (setTimeout(()=> console.log(e.nativeEvent.text)), 2000)
        }} />
      </View>
      {userData.roles_id === "admin" ?
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Pressable style={style.menuList} onPress={() => props.navigation.navigate('AddProduct')}>
            <Text style={style.sortActive}>Add Product</Text>
          </Pressable>
          <Pressable style={style.menuList} onPress={() => props.navigation.navigate('AddPromo')}>
            <Text style={style.sortActive}>Add Promo</Text>
          </Pressable>
        </View>
        :
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={style.title2}>Sort by:</Text>
          <Text style={sort === 'name' ? style.sortActive : style.sort} onPress={() => setSort('name')}>Name</Text>
          <Text style={sort === 'price' ? style.sortActive : style.sort} onPress={() => setSort('price')}>Price</Text>
          <Text style={sort === 'created_at' ? style.sortActive : style.sort} onPress={() => setSort('created_at')}>Release</Text>
          <FontAwesome5 name={order === 'asc' ? 'sort-alpha-down' : 'sort-alpha-up'} size={25} color={'#000000'} onPress={() => setOrder(order === 'asc' ? 'desc' : 'asc')} />
        </View>
      }

      <View style={{ marginBottom: 450 }}>
        <ScrollView horizontal={true} style={style.scrollViewH} showsHorizontalScrollIndicator={false}>
          <Text style={menu === 'favorite' ? style.categoryTextAct : style.categoryText}
            onPress={() => {
              setMenu('favorite')
              setLimit(6)
            }}
          >Favorite</Text>
          <Text style={menu === 'coffee' ? style.categoryTextAct : style.categoryText}
            onPress={() => {
              setMenu('coffee')
              setLimit(6)
            }}
          >Coffee</Text>
          <Text style={menu === 'non coffee' ? style.categoryTextAct : style.categoryText}
            onPress={() => {
              setMenu('non coffee')
              setLimit(6)
            }}
          >Non Coffee</Text>
          <Text style={menu === 'food' ? style.categoryTextAct : style.categoryText}
            onPress={() => {
              setMenu('food')
              setLimit(6)
            }}
          >Food</Text>
          <Text style={menu === 'all' ? style.categoryTextAct : style.categoryText}
            onPress={() => {
              setMenu('all')
              setLimit(6)
            }}
          >All</Text>
        </ScrollView>
        {loading ?
          <ActivityIndicator size={'large'} style={style.loading} />
          :
          product.length < 1 ?
            <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: 28, color: '#000000', textAlign: 'center', marginTop: 100 }}>{msg}</Text>
            :
            <FlatList data={product} numColumns={2} onEndReached={() => setLimit(limit + 6)} style={{ alignSelf: 'center', marginHorizontal: '10%' }}
              renderItem={({ item, idx }) => (
                <ProductCard key={idx} id={item.id} name={item.name} pictures={item.pictures} price={item.price} {...props} />
              )} />
        }
      </View>

    </View>
  )
}