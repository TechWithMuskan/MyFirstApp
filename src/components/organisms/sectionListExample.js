import {View, Text, SectionList, StyleSheet} from 'react-native';
import React from 'react';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const ItemView = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item}</Text>
    </View>
  );
};

const SectionListExample = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <ItemView item={item} />}
      renderSectionHeader={({section}) => (
        <Text style={styles.title}>{section.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#EEFD96',
    borderRadius: 5,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 25,
    color: '#EEFD96',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  itemName: {
    fontSize: 20,
    color: '#1C2539',
    fontWeight: 'bold',
  },
});

export default SectionListExample;
