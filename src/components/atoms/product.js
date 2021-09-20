import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const product = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.container}>
                <Image
                    style={styles.imageContainer}
                    source={{ uri: 'https://placeimg.com/640/481/tech' }}>
                </Image>
                <View style={styles.subContainer}>
                    <Text style={styles.productName}>Laptop</Text>
                    <Text style={styles.productPrice}>1000$</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.imageContainer}
                    source={{ uri: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ' }}>
                </Image>
                <View style={styles.subContainer}>
                    <Text style={styles.productName}>Laptop</Text>
                    <Text style={styles.productPrice}>1000$</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.imageContainer}
                    source={{ uri: 'https://placeimg.com/640/480/tech' }}>
                </Image>
                <View style={styles.subContainer}>
                    <Text style={styles.productName}>Laptop</Text>
                    <Text style={styles.productPrice}>1000$</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 120,
        width: 120
    },
    container: {
        height: 180,
        width: 120,
        marginHorizontal: 8,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14
    },
    productName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    productPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    }
})

export default product
