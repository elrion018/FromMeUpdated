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

const LogInScreen = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  console.log(
    Platform.OS,
    ' : LogInScreen/presenter.js의 render() 속 this.props: ',
    props,
  );

  const print = () => {
    console.log('It works!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView
          style={styles.title}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          {Platform.OS === 'ios' ? (
            <Text style={styles.titleText}>From.Me _______</Text>
          ) : (
            <Text style={styles.titleText}>From.Me________</Text>
          )}
          <Text style={styles.titleText}>_________________</Text>
          <Text style={styles.titleText}>_________________</Text>
          <TextInput
            style={styles.inputText}
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            placeholder={'phoneNumber'}
            placeholderTextColor={'#C7CBC1'}
            maxLength={11}
            keyboardType={'number-pad'}
            multiline={false}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.inputText}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            placeholder={'password'}
            placeholderTextColor={'#C7CBC1'}
            maxLength={12}
            multiline={false}
            underlineColorAndroid={'transparent'}
          />
          <TouchableOpacity style={styles.signUp} onPress={print}>
            <Text style={styles.signUpText}>SignUp</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
