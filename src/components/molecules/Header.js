import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headingStyle}>{props.heading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 65,
        backgroundColor: '#305049',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingStyle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})

export default Header
