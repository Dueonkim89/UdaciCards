import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage, FlatList } from 'react-native';
import { fetchInitialDeck, DECK_DATA_KEY } from '../utils/api.js';
import { receiveDeck } from '../actions/index.js';
import DeckListView from './DeckListView.js';


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

	renderItem({item}) {
		return <DeckListView {...item} />
	}
	
	render() {
		const { deck } = this.props;
		console.log(deck);
		return (
			<View style={{flex: 1}}>
				<FlatList data={deck} 
					keyExtractor={(item) => item.title} 
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}


function mapStateToProps(deck) {
  return {
    deck
  }
}

export default connect(mapStateToProps)(Deck);