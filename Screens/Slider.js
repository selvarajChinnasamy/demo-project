import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import ImageSlider from 'react-native-image-slider';

class SliderTests extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({ position: this.state.position === 2 ? 0 : this.state.position + 1 });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View>
                <ImageSlider
                    images={[
                        require('../assets/banner.jpg'),
                        require('../assets/banner.jpg'),
                        require('../assets/banner.jpg'),
                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({ position })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgslider: {
        width:300,
    }
});

export default SliderTests;