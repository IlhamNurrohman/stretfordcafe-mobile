import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, Text } from 'react-native';
import styles from './style';

const Welcome = ({navigation}) => {
  const userInfo  = useSelector(state => state.auth)

  const splashscreenHandler = async () => {
    try {
      if (!userInfo.token) {
        return setTimeout(() => {
          navigation.replace('Start');
        }, 3000)
      }
      setTimeout(() => {
        navigation.replace('Drawer');
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    splashscreenHandler();
  }, [])

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.bgShadow}>
        <View>
          <Text style={styles.welcomeHeader}>Welcome to Stretford Cafe</Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;