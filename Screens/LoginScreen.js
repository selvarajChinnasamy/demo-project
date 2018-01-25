import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

class LoginScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>This is login Screen</Text>
                <FormLabel>User Name</FormLabel>
                <FormInput  />
                <FormLabel>Password</FormLabel>
                <FormInput  />
                <Button onPress={() => this.props.navigation.navigate('ProfileScreen')} title="Login" />
            </View>
        );
    }
}
export default LoginScreen;