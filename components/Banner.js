import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import OverText from './OverText'
export default class Banner extends React.Component {
  render() {
    return (
        
        <Image source={require('../image/img1.png')}
        style={styles.banner}/>
             
      
    );
  }
}

const styles = StyleSheet.create({
    banner:
    {
        width :'100%',
        alignItems:'center',
        justifyContent: 'center',
    
        
    }
  

});
