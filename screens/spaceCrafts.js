import axios from 'axios';
import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class spaceCrafts extends Component{
    constructor(){
        super();
        this.state={
            aircrafts:{}
        }
    }

    getData=()=>{
        axios
        .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(response => {
            this.setState({ aircrafts: response.data.result })
            console.log(response.data.result)
        })
        .catch(error => {
            console.log(error.message)
        })
}

    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
                <View style={{flex:0.25}} >
                    <Text>Space Crafts Screen</Text>
                </View>
                <View style={{flex: 0.75}} >
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.aircrafts}
                    renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}