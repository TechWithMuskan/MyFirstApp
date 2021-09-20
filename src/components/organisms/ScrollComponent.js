import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../molecules/Header';

const ScrollComponent = (props) => {
    const { navigation } = props;
    const scrollData = [
        {
            pic: 'https://placeimg.com/640/481/arch',
            title: 'Picture 1'
        },
        {
            pic: 'https://placeimg.com/640/480/arch',
            title: 'Picture 2'
        },
        {
            pic: 'https://placeimg.com/640/479/arch',
            title: 'Picture 3'
        },
        {
            pic: 'https://placeimg.com/640/478/arch',
            title: 'Picture 4'
        },
        {
            pic: 'https://placeimg.com/640/475/arch',
            title: 'Picture 5'
        },
    ];

    return (
        <ScrollView>
            {scrollData.map((item =>
                <TouchableOpacity onPress={() => navigation.navigate('Product')} >
                    <Image
                        source={{ uri: `${item.pic}` }}
                        style={styles.imageStyle} />
                    <Text style={styles.textStyle}>{item.title}</Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        margin: 10
    },
    textStyle: {
        color: '#305049',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ScrollComponent;
