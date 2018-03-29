import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { whiteSmoke, steelBlue } from '../utils/colors.js';

class DeckListView extends React.Component {	

	routeToDeck = () => {
		const { navigation, title } = this.props;
		//route to IndividualDeckView component, add transition effect of vertical
		navigation.navigate(
			'IndividualDeckView',
			{deckTitle: title, transition: 'vertical'}
		)		
	}	
	
	render() {	
		const { questions, title, navigation } = this.props;
		// make sure to include animation when touchableopacity is clicked!
		//route to individual deck view
		return (
			<View style={styles.defaultView}>
				<TouchableOpacity style={styles.deckButton} 
					onPress={this.routeToDeck}
				>
					<Animated.Text style={[styles.deckTitle]}>{title}</Animated.Text>
					{ questions.length <= 1 
						? <Animated.Text style={[styles.numberOfCards]}>{questions.length} card</Animated.Text>
						: <Animated.Text style={[styles.numberOfCards]}>{questions.length} cards</Animated.Text>
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