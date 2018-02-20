import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity, ScrollView, ToastAndroid} from 'react-native';
import {ImagePicker} from 'expo';
import {Text, Icon, List, ListItem, Thumbnail, Left, Right, Body, Button, Item, Input} from 'native-base';
import Store from './Store';



class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state={
            product_name:'',
            price:'',
            description:'',
            imageuri:'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/128/Add-icon.png'
        };
    }

    submitProduct(){
        fetch('https://app.banner20.hasura-app.io/add_product',{
            method:'post',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body:{
                "product_name":this.state.product_name,
                "price":parseInt(this.state.price),
                "description":this.state.description,
                "filename":this.state.imageuri                
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
        });
    }

    pickImage = async () => {
        //lock mediatype to images
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
        });
        console.log(result.uri);
        if(result.uri){
            this.setState({
                imageuri:result.uri
            });
        } //else ToastAndroid.show("Error uploading file",ToastAndroid.SHORT);
    }

    render() {
        return(
            <ScrollView contentContainerStyle={{paddingTop:20}}>
                <List>
                    <ListItem>
                        <TouchableOpacity onPress={() => this.pickImage()}>
                            <Left>
                                <Thumbnail square size={80} source={{uri:this.state.imageuri}}/>
                                <Text>Add Image</Text>
                            </Left>
                            <Body/>
                            <Right/>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem style={{borderBottomColor:'rgba(0,0,0,0.0)'}}>
                        <Item regular>
                            <Input placeholder='Enter Product Name' onChangeText={(value)=>this.setState({product_name:value})} value={this.state.product_name}/>
                        </Item>
                    </ListItem>
                    <ListItem style={{borderBottomColor:'rgba(0,0,0,0.0)'}}>
                        <Item regular>
                            <Input multiline={true} numberOfLines={5} placeholder='Enter Product Description' onChangeText={(value)=>this.setState({description:value})} value={this.state.description}/>
                        </Item>
                    </ListItem>
                    <ListItem style={{borderBottomColor:'rgba(0,0,0,0.0)'}}>
                        <Item regular>
                            <Input keyboardType='numeric' placeholder='Enter Price' onChangeText={(value)=>this.setState({price:value})} value={this.state.price}/>
                        </Item>
                    </ListItem>
                </List>
                <View style={styles.button}>
                <Button onPress={() => this.submitProduct()}><Text>Submit Product</Text></Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50
    }
});

export default connect(
    (store) => {
        return store;
    }
)(AddProduct);
