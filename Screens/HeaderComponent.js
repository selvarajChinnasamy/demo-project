import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Header, Icon } from 'react-native-elements'

class HeaderComponent extends React.Component {

    render() {
        return (
            <Header style={styles.headerstyle}
            leftComponent={<View style={styles.iconstyle}><Icon color='#fff' name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} /></View>}
            // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={<View style={styles.iconstyle}><Icon color='#fff' name="home" onPress={() => this.props.navigation.navigate('DrawerOpen')} /></View>}
        />
        );
    }
}

const styles = StyleSheet.create({
    headerstyle: {
        height: 20,
    },
    iconstyle: {
        marginTop: 30,
        flexDirection: 'row',
    },
});
export default HeaderComponent;