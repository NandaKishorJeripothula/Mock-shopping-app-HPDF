import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default class ConImg extends React.Component {
  render() {
    return (
        <Image source={this.props.imageSource}
              style={styles.img}/>
      
      
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
    }
  

});
