import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import ProfileScreenmain from './ProfileScreen';
import Settings from './Settings';
import {  Button, Header, Icon } from 'react-native-elements'

class ProfileScreen extends React.Component {

    render() {
        return (
                <AppDrawerNavigator />
        );
    }
}

const AppDrawerNavigator = DrawerNavigator({
    Profile: { screen: ProfileScreenmain },
    Settings: { screen: Settings },
}, {
        contentComponent: props =>
            <View >
                <Header backgroundColor='#6cac1a' style={styles.headerstyle}
                    leftComponent={<View style={styles.iconstyle} ><Icon color='#fff' name="home" onPress={() => props.navigation.navigate('Profile') } /><Text style = {{ color: '#fff' }} >  Agro Deals</Text></View>}
                    rightComponent={<View style={styles.iconstyle} ><Icon color='#fff' name="list" /></View>}
                />
                <View style={{ alignItems: 'center', }}>
                    <Image
                        style={styles.drawerImage}
                        source={require('../assets/splash.jpg')} />
                </View>
                <View style={styles.drawerItemsstyle} >
                <DrawerItems   {...props} />
                </View>
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
    iconstyle: {
        flexDirection: 'row',
        marginTop: 30,
    },
    headerstyle: {
        height: 20,
    },
    drawerImage: {
        height: 124,
        width: 124,
        marginTop: 30,
        borderRadius: 75,
    },
    drawerItemsstyle:{
        marginTop: 20,
    }
});