import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Icon, Form, Item, Input, Button, Container} from 'native-base';
import Store from './Store';
import Banner from './Banner';
import ComContainer from './ComContainer';



class Main extends React.Component {
    render() {
        return(
            <ScrollView>
                <Form style={{flexDirection:'row'}}>
                    <Item rounded bordered style={styles.searchbar}>
                        <Input placeholder="Search..."/>
                    </Item>
                    <Button onPress={() => this.props.navigation.navigate('Filters')} light style={styles.filterButton}>
                        <Icon name='settings'/>
                    </Button>
                </Form>
                <Banner/>
                <ComContainer/>
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
    }
});

export default connect(
    (store) => {
        return store;
    }
)(Main);
