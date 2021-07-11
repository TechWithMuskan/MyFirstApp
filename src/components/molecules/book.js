import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Header from './Header'

const book = () => {
    return (
        <View>
            <Header heading='Books Collection' />
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://placeimg.com/640/410/tech'
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: 300
    },
    container: {
        alignItems: 'center',
        marginTop: 150
    }
})

export default book
