import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import styles from './styles';
import Card from '../../../components/fromMeScreen/cardList';

const FromMeScreen = () => {
  const [isFetching, setIsFetching] = useState(false);
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

  return (
    <View style={styles.container}>
      <View style={{height: useHeaderHeight()}} />
      <View style={styles.contentsBox}>
        <FlatList
          data={exItems}
          renderItem={({item}) => {
            return <Card {...item} />;
          }}
          refreshing={isFetching}
          //onRefresh={}
          onEndReachedThreshold={1}
          //onEndReached={}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{alignItems: 'center'}}
        />
      </View>
    </View>
  );
};

export default FromMeScreen;
