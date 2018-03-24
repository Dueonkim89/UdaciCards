import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

class AddCard extends React.Component {
	
	componentDidMount () {
		console.log('Loaded New Deck view');
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>This is the AddCard component!!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddCard;