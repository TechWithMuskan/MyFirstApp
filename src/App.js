import React from 'react';
import { View, StyleSheet } from 'react-native';
import Car from './components/atoms/car';

const App = () => {
	return (
		<View style={styles.container}>
			<Car />
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