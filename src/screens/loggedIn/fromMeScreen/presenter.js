import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const FromMeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <ScrollView contentContainerStyle={styles.container} />
    </SafeAreaView>
  );
};

export default FromMeScreen;
