import { View, Text, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import { REACT_APP_BE_HOST } from '@env'
import ProductCard from '../../components/ProductCard'
import style from './style'
import Header from '../../components/Header'

export default function AllProduct(props) {
  const [menu, setMenu] = useState(props.route.params.category)
  const [search, setSearch] = useState('')
  const [limit, setLimit] = useState(6)
  const [sort, setSort] = useState('categories')
  const [order, setOrder] = useState('asc')
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  // useEffect(() => {
  //   setMenu(props.route.params.category)
  //   getProduct()
  // }, [props.route.params.category])
  useEffect(() => {
    getProduct()
  }, [menu, search, sort, order])
  useEffect(() => {
    getProduct2()
  }, [limit])

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
        URL += `&name=${find}`
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
        URL += `&name=${search}`
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

  // console.log(REACT_APP_BE_HOST)
  return (
    <View>
      <Header {...props} />
      <View style={style.container}>
        <View style={style.searchContainer}>
          <IconIonicons name='search' size={20} color='#9F9F9F' />
          <TextInput style={style.searchInput} placeholder={'Search'} onChange={(e) => {
            // setTimeout(()=> setSearch(e.nativeEvent.text), 3000)
            setSearch(e.nativeEvent.text)
            // console.log(e.nativeEvent.text)
            // (setTimeout(()=> console.log(e.nativeEvent.text)), 2000)
          }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={style.title}>Sort by:</Text>
          <Text style={sort === 'name' ? style.sortActive : style.sort} onPress={()=>setSort('name')}>Name</Text>
          <Text style={sort === 'price' ? style.sortActive : style.sort} onPress={()=>setSort('price')}>Price</Text>
          <Text style={sort === 'created_at' ? style.sortActive : style.sort} onPress={()=>setSort('created_at')}>Release</Text>
          <FontAwesome5 name={order === 'asc' ? 'sort-alpha-down' : 'sort-alpha-up'} size={25} color={'#000000'} onPress={()=> setOrder(order === 'asc' ? 'desc' : 'asc')}/>
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
              <FlatList data={product} numColumns={2} onEndReached={() => setLimit(limit + 6)}
                renderItem={({ item, idx }) => (
                  <ProductCard key={idx} id={item.id} name={item.name} picture={item.picture} price={item.price} {...props} />
                )} />
          }
        </View>
      </View>
    </View>
  )
}