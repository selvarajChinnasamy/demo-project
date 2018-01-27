import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Header, Icon } from 'react-native-elements'

class Settings extends React.Component {
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
                <Header
                    leftComponent={<Icon color='#fff' name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Text>This is Settings screen</Text>
            </View>
        );
    }
}
export default Settings;