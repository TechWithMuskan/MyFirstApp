import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({field: '', message: ''});

  const onSubmit = () => {
    let loginError = {field: '', message: ''};
    if (email === '') {
      loginError.field = 'email';
      loginError.message = 'Email is required!';
      setError(loginError);
    } else if (password === '') {
      loginError.field = 'password';
      loginError.message = 'Password is required!';
      setError(loginError);
    } else {
      setError({field: '', message: ''});
      alert('Login successfully!');
    }
  };

  return (
    <>
      <View style={styles.login}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <TextInput
        placeholder="Enter Email"
        style={styles.inputField}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      {error.field === 'email' && (
        <Text style={styles.error}>{error.message}</Text>
      )}
      <TextInput
        placeholder="Enter Password"
        style={styles.inputField}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      {error.field === 'password' && (
        <Text style={styles.error}>{error.message}</Text>
      )}

      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>Submit</Text>
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
    backgroundColor: '#3b5998',
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
    backgroundColor: '#3b5998',
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

export default Login;
