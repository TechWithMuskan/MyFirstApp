import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../molecules/Header';

const ScrollComponent = () => {

    const scrollData = [
        {
            pic: 'https://placeimg.com/640/481/arch',
            title: 'Villa Picture 1'
        },
        {
            pic: 'https://placeimg.com/640/480/arch',
            title: 'Villa Picture 2'
        },
        {
            pic: 'https://placeimg.com/640/479/arch',
            title: 'Villa Picture 3'
        },
        {
            pic: 'https://placeimg.com/640/478/arch',
            title: 'Villa Picture 4'
        },
        {
            pic: 'https://placeimg.com/640/477/arch',
            title: 'Villa Picture 5'
        },
    ];

    return (
        <ScrollView horizontal>
            {/* <Header heading="Scroll Component" /> */}
            {scrollData.map((item =>
                <View>
                    <Image
                        source={{ uri: `${item.pic}` }}
                        style={styles.imageStyle} />
                    <Text style={styles.textStyle}>{item.title}</Text>
                </View>
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
