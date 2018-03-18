import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { whiteSmoke, steelBlue } from '../utils/colors.js';

class DeckListView extends React.Component {	
	componentDidMount () {
		console.log('Loaded DeckListView');
	}
	
	render() {
	
		const { questions, title, navigation } = this.props;
		// make sure to include animation when touchableopacity is clicked!
		//route to individual deck view
		return (
			<View style={styles.defaultView}>
				<TouchableOpacity style={styles.deckButton} 
					onPress={() => navigation.navigate(
						'IndividualDeckView',
						{deckTitle: title}
				)}>
					<Text style={styles.deckTitle}>{title}</Text>
					{ questions.length <= 1 
						? <Text style={styles.numberOfCards}>{questions.length} card</Text>
						: <Text style={styles.numberOfCards}>{questions.length} cards</Text>
					}					
				</TouchableOpacity>			
			</View>
		);
	}
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1,
    backgroundColor: whiteSmoke,
	borderWidth: 5,
	borderColor: steelBlue,
	borderTopWidth: 0,
	borderLeftWidth: 0,
	borderRightWidth: 0,
	borderRadius: 4
  },
  deckTitle: {
	  fontSize: 34,
	  textAlign: 'center',
  },
  numberOfCards: {
	  fontSize: 19,
	  textAlign: 'center',
  },
  deckButton: {
	  padding: 36,
  }
});

export default DeckListView;