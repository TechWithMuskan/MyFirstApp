import React from 'react'
import { View, FlatList, StyleSheet, Image } from 'react-native'

const data = [
    {
        key: '1',
        name: '420',
        name1: '481',
    },
    {
        key: '2',
        name: '421',
        name1: '431',
    },
    {
        key: '3',
        name: '423',
        name1: '464',
    },
    {
        key: '4',
        name: '426',
        name1: '433',
    },
    {
        key: '5',
        name: '429',
        name1: '620',
    }
]

const Album = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listContainer}>
                <Image style={styles.profile} source={{ uri: `https://placeimg.com/640/${item.name}/people` }} />
                <Image style={styles.profile} source={{ uri: `https://placeimg.com/640/${item.name1}/people` }} />
            </View>
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={data.key}
            showsVerticalScrollIndicator={true}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
    },
    profile: {
        height: 200,
        width: '50%',
    }
})

export default Album;
