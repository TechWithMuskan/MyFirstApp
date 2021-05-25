import React from 'react';
import { View, StyleSheet } from 'react-native';
import Product from './components/atoms/product';
import Counter from './components/atoms/counter';

const App = () => {
	return (
		<View style={styles.container}>
			<Counter />
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
