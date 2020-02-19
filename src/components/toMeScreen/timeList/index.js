import React from 'react';
import {View, Text} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import styles from './styles.js';

const Card = props => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default withNavigation(Card);
