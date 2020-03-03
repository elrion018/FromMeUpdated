import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  TextInput,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const SignUpScreen = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [nickName, setNickName] = useState('');

  console.log(
    Platform.OS,
    ' : signUpScreen/presenter.js의 render() 속 this.props: ',
    props,
  );

  const check = () => {
    console.log('It works!');
    props.navigation.navigate('logIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView
          style={styles.title}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <TextInput
            style={styles.inputText}
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
            placeholder={'phoneNumber(-제외)'}
            placeholderTextColor={'#C7CBC1'}
            maxLength={11}
            keyboardType={'number-pad'}
            multiline={false}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.inputText}
            value={nickName}
            onChangeText={text => {
              setNickName(text);
            }}
            placeholder={'name or nickname'}
            placeholderTextColor={'#C7CBC1'}
            maxLength={10}
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
          <TextInput
            style={styles.inputText}
            value={password2}
            onChangeText={text => {
              setPassword2(text);
            }}
            placeholder={'password Check'}
            placeholderTextColor={'#C7CBC1'}
            maxLength={12}
            multiline={false}
            underlineColorAndroid={'transparent'}
          />
          <TouchableOpacity style={styles.signUp} onPress={check}>
            <Text style={styles.signUpText}>SignUp</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
