import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Article = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image style={styles.profile} source={{ uri: 'https://placeimg.com/640/420/people' }} />
                <View>
                    <Text style={styles.author}>Muskan Jain</Text>
                    <Text style={styles.date}>03/10/2021</Text>
                </View>
            </View>
            <Text style={styles.title}>Lorem Ipsum</Text>
            <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan lectus orci, non egestas metus pharetra at. Aenean felis mauris, tristique non ex pretium, tincidunt dapibus orci. Sed mattis ante magna, vitae ultricies purus porttitor in. Pellentesque interdum, nunc quis vulputate fringilla, est augue efficitur lectus, et mattis diam lorem vel diam. </Text>
            <Image style={styles.imageStyle} source={{ uri: 'https://placeimg.com/640/481/nature' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#4e4c4e',
        lineHeight: 27,
        marginTop: 20,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 200,
        marginTop: 30
    },
    profile: {
        height: 60,
        width: 60,
        borderRadius: 60
    },
    author: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 15,
        color: 'gray',
        marginLeft: 20,
        marginTop: 5
    },
    title: {
        fontSize: 42,
        color: 'black',
        marginTop: 30,
        fontWeight: 'bold'
    }
})

export default Article
