import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlexExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: 'cadetblue',
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: 'darkslategrey',
  },
  box3: {
    height: 100,
    width: 100,
    backgroundColor: 'darkseagreen',
  },
});

export default FlexExample;
