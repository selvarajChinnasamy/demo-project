import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, Button, Header, Icon, Divider } from 'react-native-elements'
import ImageSlider from 'react-native-image-slider';
import SliderTests from './Slider';
import Carousel from 'simple-carousel-react-native';
// import HeaderComponent from './HeaderComponent';

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
                <Header style={styles.headerstyle} backgroundColor='#6cac1a'
                    leftComponent={<View style={styles.iconstyle}><Icon color='#fff' name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} /></View>}
                    // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={<View style={styles.iconstyle}><Icon color='#fff' name="home" onPress={() => this.props.navigation.navigate('DrawerOpen')} /></View>}
                />
                <SliderTests />
                <View style={styles.container} >
                <Carousel backgroundColor='#6cac1a' showBubbles={false} color='#6cac1a'width={370} height={100}>
                <View>
                <Image style={{marginTop:10}}
                source={require('../assets/tipsimg.jpg')}
                style={{ height: 70, width: 100 }} />
                </View>

                <View>
                    <Text>
                        Page 2
                  </Text>
                </View>

                <View>
                    <Text>
                        Page 3
                  </Text>
                </View>
              </Carousel>
              </View>
            </View >
        );
    }
}

export default ProfileScreenmain;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    headerstyle: {
        height: 20,
    },
    iconstyle: {
        marginTop: 30,
        flexDirection: 'row',
    },
    firstrow: {
        backgroundColor: "#ffc857",
        width: 100,
        height: 100,
    },

    secondrow: {
        backgroundColor: "#4b3f72",
        width: 100,
        height: 100,
    },

    thirdrow: {
        backgroundColor: "#119da4",
        width: 100,
        height: 100,
    },

    fourthrow: {
        backgroundColor: "#19647e",
        width: 100,
        height: 100,
    }

});