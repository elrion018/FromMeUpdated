import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from '../screens/loggedIn/homeScreen';

const Stack = createStackNavigator();

function LoggedInNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTransparent: true,
          headerBackTitle: 'back',
          headerBackTitleStyle: {color: 'black'},
          headerTintColor: 'black',
        }}>
        <Stack.Screen
          name="home"
          component={homeScreen}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedInNav;
