import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import ProfileScreenmain from './ProfileScreen';
import Settings from './Settings';
import {  Button, Header, Icon } from 'react-native-elements'

class ProfileScreen extends React.Component {

    render() {
        return (
            <View>
                <AppDrawerNavigator />
            </View>
        );
    }
}

const AppDrawerNavigator = DrawerNavigator({
    Profile: { screen: ProfileScreenmain },
    Settings: { screen: Settings },
}, {
        contentComponent: props =>
            <View >
                <View style={{ alignItems: 'center', }}>
                    <Image
                        style={styles.drawerImage}
                        source={require('../assets/splash.jpg')} />
                </View>
                <DrawerItems {...props} />
            </View>
    });


export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7FFFD4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerImage: {
        height: 124,
        width: 124,
        borderRadius: 75,
        margin: 8,
    }
});