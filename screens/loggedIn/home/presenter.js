import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container_HomeScreen}>
        <View style={styles.makeSpaceForTitle_HomeScreen} />
        <View style={styles.titleSpace_HomeScreen}>
          <View style={styles.titleBox_HomeScreen}>
            <Text style={styles.titleText_HomeScreen}>From. me</Text>
          </View>
          <View style={styles.titleLine_HomeScreen} />
        </View>
        <View style={styles.spaceBetweenTitleAndContents_HomeScreen} />
        <View style={styles.contents2_HomeScreen}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Comment');
            }}>
            <Text style={styles.button_HomeScreen}>To. me</Text>
          </TouchableOpacity>
          <View style={styles.contents3_HomeScreen} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Question');
            }}>
            <Text style={styles.button_HomeScreen}>From. me</Text>
          </TouchableOpacity>
          <View style={styles.contents4_HomeScreen} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Question2');
            }}>
            <Text style={styles.button_HomeScreen}>From. others</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contents5_HomeScreen} />
      </View>
    );
  }
}

export default HomeScreen;
