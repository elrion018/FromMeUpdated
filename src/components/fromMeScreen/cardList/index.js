import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import styles from './styles.js';

const Card = props => {
  const [comment, setComment] = useState(false);
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{props.contents}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('toMe', {contents: props.contents});
          }}>
          <Text style={styles.buttonText}>수정하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setComment(!comment)}>
          <Text style={styles.buttonText}>
            {comment === false ? '댓글보기' : '댓글닫기'}
          </Text>
        </TouchableOpacity>
      </View>
      {comment === false ? (
        <View />
      ) : (
        <View style={styles.commentsList}>
          <Text style={styles.comment}>지금, 잘 하고 있죠?</Text>
          <Text style={styles.comment}>당신을 믿어 의심치 않아요</Text>
          <Text style={styles.comment}>토닥토닥…괜찮아요</Text>
          <Text style={styles.comment}>쉽지 않죠? 파이팅입니다!</Text>
          <Text style={styles.comment}>지금은 어때요?</Text>
        </View>
      )}
    </View>
  );
};

export default withNavigation(Card);
