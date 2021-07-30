import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export class handleInput extends Component {
    constructor(){
        super();
        this.state={
            input: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                 <TextInput 
                 style={styles.inputStyle}
                 placeholder = "Enter Text"
                 onChangeText={(value) => {this.setState({input: value})}}
                 onSubmitEditing={() => {
                     alert(this.state.input)
                 }}>
                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle:{
        borderWidth: 5,
        borderColor: 'black',
        margin: 20,
        paddingLeft: 20,
        fontSize: 25,
        fontWeight: 'bold',
        width: '90%'
    },
    container: {
        backgroundColor: 'maroon',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default handleInput;
