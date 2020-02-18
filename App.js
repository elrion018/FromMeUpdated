import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/configureStore';
import RootContainer from './src/components/RootContainer';

const {persistor, store} = configureStore();

class App extends React.Component {
  render() {
    console.log(
      store.getState(),
      '경우에 따라서 rehydrated가 O, X 모두 가능(async)',
    );
    return (
      <Provider store={store}>
        <PersistGate
          loading={<View style={styles.container} />}
          persistor={persistor}>
          {console.log(store.getState(), '최초 store.getState()')}
          {console.log(
            setTimeout(function() {
              console.log(store.getState(), '5초후 store.getState()');
            }, 5000),
            'setTimeout() 발동',
          )}
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
