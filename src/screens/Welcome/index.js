import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from '@rneui/base';
import styles from './style';
import bgImage from '../../assets/img/download.png';

const Welcome = ({navigation}) => {
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