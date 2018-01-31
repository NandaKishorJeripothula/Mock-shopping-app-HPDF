import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Icon, Form, Item, Input, Button, Container} from 'native-base';
import Store from './Store';
import Banner from './Banner';
import ConImg from './ConImg';



class Main extends React.Component {
    render() {
        return(
            <ScrollView>
                <Form style={{flexDirection:'row'}}>
                    <Item rounded bordered style={styles.searchbar}>
                        <Input placeholder="Search..."/>
                    </Item>
                    <Button onPress={() => {this.props.navigation.navigate('Filters')}} light style={styles.filterButton}>
                        <Icon name='settings'/>
                    </Button>
                </Form>
                <Banner/>
                <View style={styles.comContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Productpage')}}>
                        <View style={styles.con2}>
                            <ConImg 
                            imageSource={require('../image/img3.jpg')}
                            header = 'SHOES'
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.con1}>
                        <ConImg 
                        imageSource={require('../image/img4.jpg')}
                        header = 'JEANS'
                        />
                    </View>
                    <View style={styles.conBanner}>
                    <ConImg 
                    imageSource={require('../image/img2.jpg')}
                    header = 'WATCH'
                    />
                    </View>
                    <View style={styles.con1}>
                        <ConImg 
                        imageSource={require('../image/img5.jpg')}
                        header = 'SPORTS SHOES'
                        />
                    </View>
                    <View style={styles.con2}>
                        <ConImg 
                        imageSource={require('../image/img4.jpg')}
                        header = 'OTHERS'/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    searchbar:{
        backgroundColor:'rgba(255,255,255,0.87)',
        width:'70%',
        marginTop:10,
        marginLeft: 20
    },
    filterButton:{
        marginTop:10,
        marginLeft: 10
    },
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

export default connect(
    (store) => {
        return store;
    }
)(Main);
