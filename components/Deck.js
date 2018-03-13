import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { fetchInitialDeck, DECK_DATA_KEY } from '../utils/api.js';
import { receiveDeck } from '../actions/index.js';


class Deck extends React.Component {
	
	componentDidMount () {
		console.log('in deck view');
		fetchInitialDeck()
			.then((deck) => {
				//grab values of this returned object and turn into array
				const deckToArrayFormat = Object.values(deck);
				//loop through each index of array and dispatch action
				deckToArrayFormat.forEach(data => {
					this.props.dispatch(receiveDeck(data));
				})
			})
	}	
	
	render() {
		console.log(this.props.deck);
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

function mapStateToProps(deck) {
  return {
    deck
  }
}


export default connect(mapStateToProps)(Deck);