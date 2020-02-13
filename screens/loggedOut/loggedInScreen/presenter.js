import React from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';

class LogInScreen extends React.Component {
  state = {};

  kakaoLogin() {
    console.log('kakaoLogin');
    this.props.setLogIn();
  }

  render() {
    console.log(
      'LogInScreen/presenter.js의 render() 속 this.props: ',
      this.props,
    );

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <Text style={styles.title}>From.Me</Text>
        <TouchableOpacity
          onPress={() => this.kakaoLogin()}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}>
          <Text style={styles.txtKakaoLogin}>카카오로 로그인하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LogInScreen;
