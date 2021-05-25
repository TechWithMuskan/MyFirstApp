import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>{this.state.count}</Text>
                </View>
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => this.incrementCount()}>
                    <Text style={styles.counterText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.minusButton}
                    onPress={() => this.decrementCount()}>
                    <Text style={styles.counterText}>-</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterView: {
        backgroundColor: 'black',
        height: 110,
        width: 190,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        fontSize: 30,
        color: 'white'
    },
    plusButton: {
        backgroundColor: 'black',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 50
    },
    minusButton: {
        backgroundColor: 'black',
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 50
    }
})

export default Counter;