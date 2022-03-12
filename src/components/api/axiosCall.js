import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const AxiosCall = () => {
  const [users, setUsers] = useState([]);

  const axiosAPIRequest = () => {
    axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    }).then(response => setUsers(response.data));
  };

  const ItemView = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>Id: </Text>
          <Text style={styles.title}>{item.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Name: </Text>
          <Text style={styles.data}>{item.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Email: </Text>
          <Text style={styles.data}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={axiosAPIRequest} style={styles.button1}>
        <Text style={styles.title}>Call Axios API</Text>
      </TouchableOpacity>

      <FlatList data={users || []} renderItem={ItemView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#D0AAA0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000000',
    padding: 20,
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  button1: {
    backgroundColor: '#000000',
    padding: 20,
    alignItems: 'center',
    marginBottom: 50,
    margin: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
    color: '#D0AAA0',
    fontWeight: 'bold',
  },
  data: {
    fontSize: 18,
    color: '#878381',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#2B2B2B',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
});

export default AxiosCall;
