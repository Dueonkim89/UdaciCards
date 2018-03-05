import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NewDeck extends React.Component {
	
	componentDidMount () {
		console.log('Loaded New Deck view');
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>This is the New Deck View... to be worked on!!</Text>
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

export default NewDeck;