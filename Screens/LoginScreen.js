import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

class LoginScreen extends React.Component {

     constructor(props){
        super(props);
        this.state = {
            username : null,
            password : null,
        }
    }
    componentDidMount(){
        this._loadInitialState().done();
    }
    _loadInitialState= async()=>{
        var value = await AsyncStorage.getItem('user');
        if(value != null){
            this.props.navigation.navigate('ProfileScreen');
        }
    }
    login= () => {
        if((this.state.username!=null)&&(this.state.password!=null)){
            AsyncStorage.setItem('user',this.state.username);
            this.props.navigation.navigate('ProfileScreen');
        }else{
            alert('User Invalid');
        }
    }
    render() {
        return (
            <View>
                <Text>This is login Screen</Text>
                <FormLabel>User Name</FormLabel>
                <FormInput onChangeText={ (username)=> this.setState({username}) } />
                <FormLabel>Password</FormLabel>
                <FormInput  onChangeText={ (password)=> this.setState({password})} />
                <Button onPress={ this.login } title="Login" />
            </View>
        );
    }
}
export default LoginScreen;