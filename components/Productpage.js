import React from 'react';
import {View, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import {Text, Item,Label,Input, Button}  from 'native-base';
 
export default class Productpage extends React.Component{
    render() {
        return(
            <ScrollView contentContainerStyle={styles.main}>

                <Image source={require('../image/demo.png')} style={styles.image}/> 
                <Text style={styles.heading}>Caprese Grey Sling Bag with Metallic Studs</Text>
                
                <View style={styles.view}>
                    <Button style={{backgroundColor:'#1A237E'}} onPress={() => {}}>
                            <Text>Add to cart</Text>
                    </Button>
                    <Button style={{backgroundColor:'#1A237E'}} onPress={() => {}}>
                            <Text>Buy Now</Text>
                    </Button>
                </View>

                <Text style={styles.text1}>
                    Product Details
                </Text>
                <Text  style={styles.text2}>
                    Grey sling bag with metallic studs, has a zip closure
                    1 main compartment, 1 external and 5 inner pockets
                    Non-Detachable Sling Strap
                </Text>

            </ScrollView>
                
        );
    }
}

 const styles = StyleSheet.create({
  view: {
   flexDirection:'row',
   padding:10   ,
   justifyContent: 'space-between'
  },
  main:
  {
      height:600,
      width:300,
      flex:0,
      flexDirection: 'column',
      marginHorizontal:20,
  },
  image:
  {
      height:250,
      width:250
      ,alignItems:'center',
      justifyContent:'center',
      marginHorizontal:10,
  },
  input:
  {
    height:17,
    width:180,
    fontSize:16,
    marginVertical:10,
  },
  heading:
  {
    fontSize:18,
    color:'#1A237E',
    fontWeight:'bold'
  },
  text1:
  {
    fontSize:16,
    color:'#1A237E',
    fontWeight:'500',
    padding:10
  },
  text2:
  {
    fontSize:16,
    color:'#1A237E',
    fontWeight:'200'
  },

});