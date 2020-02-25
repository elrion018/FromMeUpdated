import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from '../screens/loggedIn/homeScreen';
import toMeScreen from '../screens/loggedIn/toMeScreen';
import fromMeScreen from '../screens/loggedIn/fromMeScreen';
import fromOthersScreen from '../screens/loggedIn/fromOthersScreen';

const Stack = createStackNavigator();

function LoggedInNav(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTransparent: true,
          headerBackTitle: 'back',
          headerBackTitleStyle: {color: 'black'},
          headerTintColor: 'black',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="home"
          component={homeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="toMe"
          component={toMeScreen}
          options={({navigation}) => ({
            title: 'To.Me',
            headerRightContainerStyle: {paddingRight: 20},
          })}
        />
        <Stack.Screen
          name="fromMe"
          component={fromMeScreen}
          options={({navigation}) => ({
            title: 'From.Me',
          })}
        />
        <Stack.Screen
          name="fromOthers"
          component={fromOthersScreen}
          options={({navigation}) => ({
            title: 'From.Others',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedInNav;
