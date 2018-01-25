import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Body, Container, Header, Content } from 'native-base';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/Profile';
import { StackNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
     <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  LoginScreen: { screen : LoginScreen },
  ProfileScreen : { screen : ProfileScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
