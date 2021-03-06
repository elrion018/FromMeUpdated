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

  const login = () => {
    props.setLogIn();
    console.log('로그인');
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
          <TextInput
            style={styles.inputText}
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            placeholder={'phonenumber'}
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
          <TouchableOpacity style={styles.signUp} onPress={() => login()}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => props.navigation.navigate('signUp')}>
            <Text style={styles.signUpText}>회원가입</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
