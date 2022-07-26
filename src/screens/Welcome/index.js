import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, Text } from 'react-native';
import styles from './style';

const Welcome = () => {
  const { userInfo } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (userInfo.token === false) {
      dispatch(logoutAction())
      return navigation.replace('Start');
    }
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