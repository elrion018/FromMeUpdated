import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import LoggedOutNavigation from '../../navigation/loggedOutNav';
import LoggedInNavigation from '../../navigation/loggedInNav';

class RootContainer extends React.Component {
  render() {
    const {isLoggedIn} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          // Home 화면으로 이동
          <LoggedInNavigation />
        ) : (
          // Login 화면으로 이동
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default RootContainer;
