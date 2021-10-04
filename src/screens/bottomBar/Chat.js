import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Chat = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <Text style={styles.user}>make me a sandwich</Text>
                <Image style={styles.profile} source={{ uri: 'https://placeimg.com/640/420/people' }} />
            </View>
            <View style={styles.leftContainer}>
                <Image style={styles.profile} source={{ uri: 'https://placeimg.com/640/420/tech' }} />
                <Text style={styles.author}>what? make it yourself</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.user}>sudo make me a sandwich</Text>
                <Image style={styles.profile} source={{ uri: 'https://placeimg.com/640/420/people' }} />
            </View>
            <View style={styles.leftContainer}>
                <Image style={styles.profile} source={{ uri: 'https://placeimg.com/640/420/tech' }} />
                <Text style={styles.author}>okay</Text>
            </View>
            <Text style={styles.inputbox}>Write a message</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    inputbox: {
        fontSize: 18,
        backgroundColor: 'white',
        color: 'grey',
        padding: 20,
        marginTop: 10
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 10
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    author: {
        fontSize: 18,
        color: '#4e4c4e',
        marginLeft: 10,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 'bold'
    },
    user: {
        fontSize: 18,
        color: 'white',
        marginRight: 10,
        backgroundColor: '#0a6cf9',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
})

export default Chat
