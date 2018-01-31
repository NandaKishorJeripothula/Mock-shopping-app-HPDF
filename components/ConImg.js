import React from 'react';
import { StyleSheet, Image, ImageBackground} from 'react-native';
import {Text} from 'native-base';

export default class ConImg extends React.Component {
  render() {
    return (
        <ImageBackground source={this.props.imageSource} style={styles.img}>
            <Text>{this.props.header}</Text>
        </ImageBackground>
      
      
    );
  }
}

const styles = StyleSheet.create({
    img:
    {
        width:'100%',
        height:200,
        alignItems:'center',
        justifyContent: 'center',
        opacity:0.7
    }
  

});
