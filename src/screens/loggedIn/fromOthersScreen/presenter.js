import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import styles from './styles';
import Card from '../../../components/fromOthersScreen/cardList';
import Card2 from '../../../components/fromOthersScreen/commentsList';
import Modal from 'react-native-modal';

const FromOthersScreen = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);
  const [comment, setComment] = useState('');

  const exItems = [
    {
      id: 0,
      contents:
        '배고프다.배고프다.배고프다.배고프다.배고프다.배고프다.배고프다.배고프다.배고프다.',
      time: new Date(Date.now()),
    },
    {id: 1, contents: 'yes', time: new Date(Date.now())},
    {id: 2, contents: 'yes', time: new Date(Date.now())},
    {id: 3, contents: 'yes', time: new Date(Date.now())},
    {id: 4, contents: 'yes', time: new Date(Date.now())},
    {id: 5, contents: 'yes', time: new Date(Date.now())},
    {id: 6, contents: 'yes', time: new Date(Date.now())},
    {id: 7, contents: 'yes', time: new Date(Date.now())},
    {id: 8, contents: 'yes', time: new Date(Date.now())},
    {id: 9, contents: 'yes', time: new Date(Date.now())},
    {id: 10, contents: 'yes', time: new Date(Date.now())},
    {id: 11, contents: 'yes', time: new Date(Date.now())},
    {id: 12, contents: 'yes', time: new Date(Date.now())},
    {id: 13, contents: 'yes', time: new Date(Date.now())},
  ];

  const commentsList = [
    {1: '지금, 잘 하고 있죠?'},
    {2: '당신을 믿어 의심치 않아요'},
    {3: '토닥토닥…괜찮아요!'},
    {4: '쉽지 않죠? 파이팅입니다!'},
    {5: '지금은 어때요?'},
  ];

  return (
    <View style={styles.container}>
      <View style={{height: useHeaderHeight()}} />
      <View style={styles.contentsBox}>
        <FlatList
          data={exItems}
          renderItem={({item}) => {
            return (
              <Card
                {...item}
                modal={commentsModal}
                setModal={setCommentsModal}
              />
            );
          }}
          refreshing={isFetching}
          //onRefresh={}
          onEndReachedThreshold={1}
          //onEndReached={}
          keyExtractor={item => item.id}
          contentContainerStyle={{alignItems: 'center'}}
        />
      </View>

      <Modal
        onBackdropPress={() => setCommentsModal(false)}
        isVisible={commentsModal}>
        <View style={styles.modalContainer}>
          <View style={styles.commentsModal}>
            <ScrollView>
              {commentsList.map((data, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setComment(Object.values(data));
                    }}>
                    <Card2 key={index} text={Object.values(data)} />
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

export default FromOthersScreen;
