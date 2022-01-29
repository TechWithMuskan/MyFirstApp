import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const StateExample = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countStyle}>{count}</Text>

      <TouchableOpacity onPress={onClick} style={styles.button}>
        <Text style={styles.buttonText}>Increase count</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countStyle: {
    fontSize: 40,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 30,
    paddingVertical: 13,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default StateExample;
