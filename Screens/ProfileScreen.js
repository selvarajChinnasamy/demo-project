import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, Button, Header, Icon, Divider } from 'react-native-elements'

class ProfileScreenmain extends React.Component {
    static navigationOptions = {
        drawerIcon: (
            <Image
                source={require('../assets/splash.jpg')}
                style={{ height: 24, width: 24 }} />
        )
    }
    render() {
        return (
            <View>
                <Header backgroundColor='#3ADF00'
                    leftComponent={<Icon color='#fff' name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Text>This is Profile Screensds dfdfdfd dfdf ddddddd ddddddddddddd ddddddddddddd</Text>
            </View>
        );
    }
}
export default ProfileScreenmain;

const styles = StyleSheet.create({
    header: {
        color: '#3ADF00',
    },
});