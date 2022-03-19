import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const carBrands = [
  {
    id: 1,
    name: 'Audi',
    price: '2,00,000',
  },
  {
    id: 2,
    name: 'Kia',
    price: '1,00,000',
  },
  {
    id: 3,
    name: 'Toyota',
    price: '3,00,000',
  },
  {
    id: 4,
    name: 'Volkswagen',
    price: '5,00,000',
  },
  {
    id: 5,
    name: 'Mercedes-Benz',
    price: '7,00,000',
  },
  {
    id: 6,
    name: 'Hyundai',
    price: '80,000',
  },
  {
    id: 7,
    name: 'Tata',
    price: '90,000',
  },
  {
    id: 8,
    name: 'Mahindra',
    price: '70,000',
  },
  {
    id: 9,
    name: 'Maruti Suzuki',
    price: '50,000',
  },
];

const FlatListExample = () => {
  const ItemView = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={carBrands}
      renderItem={ItemView}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#253439',
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 5,
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FlatListExample;
