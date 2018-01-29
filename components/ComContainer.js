import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import ConImg from './ConImg';

export default class ComContainer extends React.Component {
  render() {
    return (
        
      <View style={styles.comContainer}>
         <View style={styles.con2}>
            <ConImg 
            imageSource={require('../image/img3.jpg')}
            header = 'Shoes'
            />
         </View>
         <View style={styles.con1}>
             <ConImg 
             imageSource={require('../image/img4.jpg')}
             header = 'jeans'
             />
         </View>
         <View style={styles.conBanner}>
         <ConImg 
         imageSource={require('../image/img2.jpg')}
         header = 'Watch'
         />
         </View>
         <View style={styles.con1}>
            <ConImg 
            imageSource={require('../image/img5.jpg')}
            header = 'Sports Shoes'
            />
         </View>
         <View style={styles.con2}>
             <ConImg 
             imageSource={require('../image/img4.jpg')}
             header = 'others'/>
         </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
    comContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5,
    },
    con1:{
     flex: 1,
     padding: 5,

    },
    con2:{
        flex: 2,
        padding: 5,
    },
    conBanner:{
        width:'100%',
        alignItems:'center',
        justifyContent :'center',
        padding:5,


    }
  

});
