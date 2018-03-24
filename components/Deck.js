import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage, FlatList } from 'react-native';
import { fetchDeck } from '../utils/api.js';
import { receiveDeck } from '../actions/index.js';
import DeckListView from './DeckListView.js';


class Deck extends React.Component {

	componentDidMount () {
		fetchDeck()
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
		const { deck, navigation } = this.props;
		return (
			<View style={{flex: 1}}>
				<FlatList data={deck} 
					keyExtractor={(item) => item.title} 
					renderItem={({ item }) => (
						<DeckListView {...item} navigation={navigation}/>
					)}
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