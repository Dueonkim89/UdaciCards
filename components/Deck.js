import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { fetchInitialDeck, DECK_DATA_KEY } from '../utils/api.js';

class Deck extends React.Component {
	
	componentDidMount () {
		console.log('in deck view');
		fetchInitialDeck()
			.then((data) => console.log(data))
	}	
	
	render() {
		return (
			<View style={styles.container}>
				<Text>This is the Deck View... to be worked on!!</Text>
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

export default Deck;