import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class car extends Component {
    constructor() {
        super();
        this.state = {
            car: 'Audi'
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>
                    {this.state.car}
                </Text>
                <Text style={styles.textStyle}>
                    {this.state.car}
                </Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Brand'
                    placeholderTextColor='#dddddd'
                    value={this.state.car}
                    onChangeText={data => this.setState({
                        car: data
                    })} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: '#2e414d',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputBox: {
        fontSize: 30,
        color: '#2e414d',
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: '#2e414d',
        width: 300,
        paddingLeft: 30,
        borderRadius: 10,
        marginTop: 50
    }
})

export default car;