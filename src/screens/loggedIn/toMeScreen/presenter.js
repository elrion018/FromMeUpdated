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
  PushNotificationIOS,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import Modal from 'react-native-modal';
import PushNotification from 'react-native-push-notification';
import styles from './styles.js';
import Card from '../../../components/toMeScreen/timeList';
import Scheduling from '../../../components/toMeScreen/scheduleFunction';
import QuestionList from '../../../components/toMeScreen/question';

const ToMeScreen = props => {
  console.log(Platform.OS, ':', props.user);
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
  const [timeText, setTimeText] = useState('얼마 후');
  const [time, setTime] = useState();
  const [sendModal, setSendModal] = useState(false);
  const [timeModal, setTimeModal] = useState(true);
  const [question, setQuestion] = useState('');
  let timeList = [
    {'10분 후': [0, 10]},
    {'30분 후': [0, 30]},
    {'1시간 후': [1, 1]},
    {'3시간 후': [1, 3]},
    {'1일 후': [2, 1]},
    {'3일 후': [2, 3]},
    {'1주일 후': [2, 7]},
    {'3주일 후': [2, 21]},
    {'1달 후': [3, 1]},
    {'3달 후': [3, 3]},
  ];

  useEffect(() => {
    PushNotification.configure({
      onNotification: function(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
    let sentence = QuestionList();
    setQuestion(sentence);
    if (props.route.params?.contents) {
      setContents(props.route.params.contents);
    }
  }, [props.route.params]);

  const choseTime = data => {
    setTimeText(Object.keys(data));
    setTime(Object.values(data));
    setTimeModal(!timeModal);
  };

  const send = to => {
    setSendModal(!sendModal);
    let temp = Scheduling(time);
    Keyboard.dismiss();
    if (to === 0) {
      console.log('To. me', temp);
    } else {
      console.log('To. others', temp);
    }
  };

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
            {timeText}
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
            placeholder={question}
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
              {timeList.map((data, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      choseTime(data);
                    }}>
                    <Card key={index} text={Object.keys(data)} />
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
