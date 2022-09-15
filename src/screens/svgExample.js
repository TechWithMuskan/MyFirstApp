import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../assets/images/logo.svg';

const SvgExample = () => {
  return (
    <View style={styles.container}>
      <Logo width={220} height={140} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SvgExample;
