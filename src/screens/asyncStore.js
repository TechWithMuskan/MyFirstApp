import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStore = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('username', value);
      alert('Username in store saved successfully!');
    } catch (error) {
      console.log('error :', error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        alert(`Welcome ${value}`);
      }
    } catch (e) {
      console.log('error :', error);
    }
  };

  const onSubmit = () => {
    storeData(username);
  };

  return (
    <>
      <View style={styles.login}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <TextInput
        placeholder="Enter username"
        style={styles.inputField}
        value={username}
        onChangeText={value => setUsername(value)}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.inputField}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submit} onPress={getData}>
        <Text style={styles.submitText}>Get Store Data</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  login: {
    backgroundColor: '#233f49',
    padding: 18,
    alignItems: 'center',
    marginBottom: 50,
  },
  inputField: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginTop: 12,
    marginHorizontal: 22,
    fontSize: 16,
  },
  error: {
    marginHorizontal: 22,
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
  submit: {
    backgroundColor: '#233f49',
    marginHorizontal: 20,
    marginTop: 50,
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  submitText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default asyncStore;
