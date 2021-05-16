import React from 'react';
import { View, StyleSheet } from 'react-native';
import FirstComponent from './components/atoms/firstComponent';

const App = () => {
	return (
		<View style={styles.container}>
			<FirstComponent />
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
