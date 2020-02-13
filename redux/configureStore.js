import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist'; // (1)
import {AsyncStorage} from 'react-native'; // local storage
import reduxThunk from 'redux-thunk';
import userReducer from './user';
import cardReducer from './card';

const middlewares = [reduxThunk]; // (2)

const rootReducer = combineReducers({user: userReducer, card: cardReducer});

const persistConfig = {
  key: 'root', // the key for the persist
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // returns an "ENHANCED" reducer
// console.log(persistedReducer, "persistedReducer(함수)");

const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  // console.log(store, "store");
  let persistor = persistStore(store, null, () => {
    console.log('callback function called after rehydration is finished');
  }); // "ENABLE" persistence
  // console.log(persistor, "persistor");
  return {store, persistor};
};

export default configureStore;
