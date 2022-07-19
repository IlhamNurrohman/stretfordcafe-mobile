import { View, Text } from 'react-native'
import React from 'react'
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { DrawerActions } from '@react-navigation/native'

export default function Header({navigation}) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', padding: '5%', backgroundColor: '#F2F2F2' }}>
      <IconAwesome name='bars' size={30} style={{flex: 3}} color='#000000' 
      onPress={()=> {
        navigation.dispatch(DrawerActions.openDrawer())
        // navigation.toggleDrawer()
        // navigation.openDrawer()
      }}/>
      {/* <Text>Header</Text> */}
      <View style={{display: 'flex', flexDirection: 'row', flex: 2, justifyContent: 'space-between'}}>
        <IconIonicons name='chatbubble-outline' size={30} color='#9F9F9F' />
        <IconIonicons name='search' size={30} color='#9F9F9F'/>
        <IconIonicons name='cart-outline' size={30} color='#9F9F9F'/>
      </View>
    </View>
  )
}