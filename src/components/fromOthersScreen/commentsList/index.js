import React from 'react';
import {View, Text} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import styles from './styles.js';

const Card = props => {
  return (
    <View key={props.key} style={styles.item}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default withNavigation(Card);
