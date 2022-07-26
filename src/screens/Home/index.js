import { View, Text, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import { REACT_APP_BE_HOST } from '@env'
import style from './style'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import { getUserAction } from '../../redux/actionCreators/user'
// const REACT_APP_BE_HOST = 'http://192.168.93.238:8000';

export default function Home(props) {
  const [menu, setMenu] = useState('all')
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [limit, setLimit] = useState(6)

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
            // setTimeout(()=> setSearch(e.nativeEvent.text), 3000)
            setSearch(e.nativeEvent.text)
            // console.log(e.nativeEvent.text)
            // (setTimeout(()=> console.log(e.nativeEvent.text)), 2000)
          }} />
        </View>
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
              <Text style={{fontFamily: 'Poppins-ExtraBold', fontSize: 28, color: '#000000', textAlign: 'center', marginTop: 100}}>{msg}</Text>
              :
              <FlatList data={product} numColumns={2} onEndReached={() => setLimit(limit + 6)} style={{alignSelf: 'center', marginHorizontal: '10%'}}
                renderItem={({ item, idx }) => (
                  <ProductCard key={idx} id={item.id} name={item.name} pictures={item.pictures} price={item.price} {...props} />
                )} />
          }
        </View>
        
    </View>
  )
}