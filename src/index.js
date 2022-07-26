import { StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Register from './screens/Register'
import Login from './screens/Login'
import Forgot from './screens/Forgot'
import Start from './screens/Start'
import Home from './screens/Home'
import MyDrawer from './screens/Drawer'
import ProductDetail from './screens/ProductDetail'
import Cart from './screens/Cart'
import Delivery from './screens/Delivery'
import Payment from './screens/Payment'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import History from './screens/History'
import AllProduct from './screens/Product'
import EditPasswordProfile from './screens/EditPasswordProfile'
import ResetPassword from './screens/ResetPassword'
import Welcome from './screens/Welcome'
import AddProduct from './screens/AddProduct'
import AddPromo from './screens/AddPromo'


const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  return (
      <Drawer.Navigator useLegacyImplementation={true} drawerContent={(props)=> <MyDrawer {...props}/>}>
        <Drawer.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Drawer.Screen name='Product' component={ProductDetail} options={{ headerShown: false }}/>
        <Drawer.Screen name='Cart' component={Cart} options={{ headerShown: false }}/>
        <Drawer.Screen name='Delivery' component={Delivery} options={{ headerShown: false }}/>
        <Drawer.Screen name='Payment' component={Payment} options={{ headerShown: false }}/>
        <Drawer.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
        <Drawer.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }}/>
        <Drawer.Screen name='AllProduct' component={AllProduct} options={{ headerShown: false }}/>
        <Drawer.Screen name='History' component={History} options={{ headerShown: false }}/>
        <Drawer.Screen name='AddProduct' component={AddProduct} options={{ headerShown: false }}/>
        <Drawer.Screen name='AddPromo' component={AddPromo} options={{ headerShown: false }}/>
        {/* <Drawer.Screen name='EditPasswordProfile' component={EditPasswordProfile} options={{ headerShown: false }}/> */}
      </Drawer.Navigator>
  )
}

const Router = () => {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <>
      <StatusBar barStyle={"light-content"} hidden={true} />
      <Navigator 
      initialRouteName='AddProduct'
        screenOptions={{
          headerShown: false
        }}
        >
        <Screen name='Start' component={Start} options={{ headerShown: false }} />
        <Screen name='Register' component={Register} options={{ headerShown: false }}/>
        <Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Screen name='ResetPassword' component={ResetPassword} options={{ headerShown: false }} />
        <Screen name='Drawer' component={DrawerNav} options={{ headerShown: false }}/>
        <Screen name='EditPasswordProfile' component={EditPasswordProfile} options={{ headerShown: false }} />
        <Screen name='Forgot' component={Forgot} options={{ headerShown: false }} />
        <Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        </Navigator>
    </>
  )
}

export default Router