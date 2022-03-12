import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './login';

const Icons = () => {
  return (
    <>
      <Login />
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.facebook}>
            <Icon name="facebook" size={28} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.google}>
            <Icon name="google" size={28} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.twitter}>
            <Icon name="twitter" size={28} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkedin}>
            <Icon name="linkedin" size={28} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.pinterest}>
            <Icon name="pinterest-p" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={{padding: 20, flexDirection: 'row'}}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            size={25}
            style={{
              paddingHorizontal: 25,
              paddingVertical: 15,
            }}>
            Sign in with Facebook
          </Icon.Button>

          <View style={{margin: 5}}></View>

          <Icon.Button
            name="google"
            size={25}
            style={{padding: 15}}
            backgroundColor="#de5246"
            style={{paddingHorizontal: 25, paddingVertical: 15}}>
            Sign in with Google
          </Icon.Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    margin: 30,
  },
  facebook: {
    backgroundColor: '#3b5998',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  google: {
    backgroundColor: '#de5246',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  twitter: {
    backgroundColor: '#1da1f2',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  linkedin: {
    backgroundColor: '#0e76a8',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  pinterest: {
    backgroundColor: '#E60023',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default Icons;
