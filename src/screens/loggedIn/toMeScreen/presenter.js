import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import styles from './styles.js';
import {useHeaderHeight} from '@react-navigation/stack';
import Modal from 'react-native-modal';
import Card from '../../../components/toMeScreen/timeList';
//import firebase from 'react-native-firebase';
//import AsyncStorage from '@react-native-community/async-storage';

const ToMeScreen = props => {
  props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          setSendModal(!sendModal);
        }}>
        <Text style={{fontSize: 15}}>보내기</Text>
      </TouchableOpacity>
    ),
  });
  /* 네비게이션 오른쪽 보내기 버튼 스크린과 연결 */

  const [contents, setContents] = useState('');
  const [time, setTime] = useState('얼마 후');
  const [sendModal, setSendModal] = useState(false);
  const [timeModal, setTimeModal] = useState(true);
  let timeList = [
    {'10분 후': 10},
    {'30분 후': 30},
    {'1시간 후': 60},
    {'3시간 후': 180},
    {'1주일 후': 1},
    {'3주일 후': 3},
    {'1달 후': 100},
    {'3달 후': 300},
  ];
  /* 훅 사용, contents: 글 내용, time: 선택한 시간, sendModal, timeModal: 각각 보내기 버튼과 시간을 클릭할 때 나오는 모달창 */

  /* 최초에 노티채널과 체크 퍼미션 호출 */

  const send = to => {
    setSendModal(!sendModal);
    Keyboard.dismiss();
    if (to === 0) {
      console.log('To. me');
    } else {
      console.log('To. others');
    }
  };

  console.log(Platform.OS, ':', props.user);
  return (
    <View style={styles.container}>
      <View style={{height: useHeaderHeight()}} />
      <View style={styles.timePick}>
        <TouchableOpacity
          style={styles.timePickButton}
          onPress={() => {
            setTimeModal(!timeModal);
          }}>
          <Text
            style={
              time === '얼마 후' ? styles.timePickTextBe : styles.timePickTextAf
            }>
            {time}
          </Text>
          <Text style={styles.timePickText}>의 당신에게 전해드릴까요?</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={
          contents === ''
            ? styles.contentsWithoutkeyboard
            : styles.contentsWithkeyboard
        }
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <TextInput
            style={styles.textInput}
            placeholder={'미래의 당신이 읽습니다.'}
            placeholderTextColor={'#C7CBC1'}
            returnKeyType={'done'}
            maxLength={2000}
            multiline={true}
            onChangeText={text => {
              setContents(text);
            }}
            value={contents}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        onBackdropPress={() => setTimeModal(!sendModal)}
        isVisible={sendModal}>
        <View style={styles.modalContainer}>
          <View style={styles.sendModal}>
            <TouchableOpacity
              onPress={() => {
                send(0);
              }}>
              <Text style={styles.sendText}>To. Me</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                send(1);
              }}>
              <Text style={styles.sendText}>To. Others</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        onBackdropPress={() => setTimeModal(!timeModal)}
        isVisible={timeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.timeModal}>
            <ScrollView>
              {timeList.map(data => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setTime(Object.keys(data));
                      setTimeModal(!timeModal);
                    }}>
                    <Card key={Object.keys(data)} text={Object.keys(data)} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ToMeScreen;
