import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const data = [
    {
        key: 'M',
        name: 'Marissa Castillo',
        contact: '7766398169',
    },
    {
        key: 'D',
        name: 'Denzal Curry',
        contact: '9394378449',
    },
    {
        key: 'G',
        name: 'Miles Ferguson',
        contact: '8966872888',
    },
    {
        key: 'R',
        name: 'Desiree Webster',
        contact: '7766398169',
    },
    {
        key: 'S',
        name: 'Samantha Young',
        contact: '6538288534',
    },
    {
        key: 'I',
        name: 'Irene Hunter',
        contact: '2932176249',
    },
    {
        key: 'A',
        name: 'Annie Ryan',
        contact: '478456627',
    },
    {
        key: 'O',
        name: 'Sasha Oliver',
        contact: '9743195919',
    },
    {
        key: 'J',
        name: 'Jarrod Avila',
        contact: '8338313806',
    }
]

const Contact = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listContainer} >
                <View style={styles.keyContainer}>
                    <Text style={styles.itemKey}>{item.key}</Text>
                </View>
                <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.contact}>{item.contact}</Text>
                </View>
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
        padding: 12,
        alignItems: 'center',
        borderBottomWidth: .2,
        borderBottomColor: 'grey'
    },
    keyContainer: {
        backgroundColor: '#e64b58',
        borderRadius: 60,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    itemKey: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
    itemName: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    contact: {
        fontSize: 15,
        color: 'gray',
        marginTop: 5
    },
})

export default Contact
