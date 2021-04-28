import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	textStyle: { 
		color: 'red', 
		fontSize: 25 
	}
});

export default App;