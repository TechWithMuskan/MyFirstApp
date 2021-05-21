import React from 'react';
import { View, StyleSheet } from 'react-native';
import Product from './components/atoms/product';

const App = () => {
	return (
		<View style={styles.container}>
			<Product />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default App;
