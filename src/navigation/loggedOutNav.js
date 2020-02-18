import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import loggedInScreen from '../screens/loggedOut/loggedInScreen';
import signUpScreen from '../screens/loggedOut/signUpScreen';

const Stack = createStackNavigator();

function LoggedOutNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="logIn"
        screenOptions={{
          title: '',
          headerTransparent: true,
          headerBackTitle: 'back',
          headerBackTitleStyle: {color: 'black'},
          headerTintColor: 'black',
        }}>
        <Stack.Screen name="logIn" component={loggedInScreen} />
        <Stack.Screen name="signUp" component={signUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedOutNav;
