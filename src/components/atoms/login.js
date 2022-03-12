import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

const Login = () => {
  return (
    <>
      <View style={styles.login}>
        <Text style={styles.submitText}>Login</Text>
      </View>
      <TextInput
        placeholder="Enter Email"
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginVertical: 12,
          marginHorizontal: 22,
          fontSize: 20,
        }}
      />
      <TextInput
        placeholder="Enter Password"
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginVertical: 12,
          marginHorizontal: 22,
          fontSize: 20,
        }}
      />
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#3b5998',
    margin: 50,
    padding: 18,
    alignItems: 'center',
    borderRadius: 4,
  },
  login: {
    backgroundColor: '#3b5998',
    padding: 18,
    alignItems: 'center',
    marginBottom: 50,
  },
  submitText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Login;
