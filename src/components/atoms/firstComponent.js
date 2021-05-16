import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const FirstComponent = () => {
    return (
        <View>
            <Text style={styles.textStyle}>First Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'green'
    }
})

export default FirstComponent;
