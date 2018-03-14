import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { whiteSmoke } from '../utils/colors.js';

class DeckListView extends React.Component {
	
	
	
	componentDidMount () {
		console.log('Loaded DeckListView');
	}
	
	render() {
		// make sure to include animation when touchableopacity is clicked!
		//route to individual deck view
		return (
			<View style={styles.defaultView}>
				<View>
					<TouchableOpacity style={styles.deckButton} onPress={() => console.log('pressed') }>
						<Text style={styles.deckTitle}>udacicards</Text>
						<Text style={styles.numberOfCards}>3 cards</Text>
					</TouchableOpacity>	
				</View>
				<View>
					<TouchableOpacity style={styles.deckButton} onPress={() => console.log('pressed') }>
						<Text style={styles.deckTitle}>udacicards</Text>
						<Text style={styles.numberOfCards}>3 cards</Text>
					</TouchableOpacity>	
				</View>
				<View>
					<TouchableOpacity style={styles.deckButton} onPress={() => console.log('pressed') }>
						<Text style={styles.deckTitle}>udacicards</Text>
						<Text style={styles.numberOfCards}>3 cards</Text>
					</TouchableOpacity>	
				</View>
				<View>
					<TouchableOpacity style={styles.deckButton} onPress={() => console.log('pressed') }>
						<Text style={styles.deckTitle}>udacicards</Text>
						<Text style={styles.numberOfCards}>3 cards</Text>
					</TouchableOpacity>	
				</View>	
				<View>
					<TouchableOpacity style={styles.deckButton} onPress={() => console.log('pressed') }>
						<Text style={styles.deckTitle}>udacicards</Text>
						<Text style={styles.numberOfCards}>3 cards</Text>
					</TouchableOpacity>	
				</View>
				<View>
					<TouchableOpacity style={styles.deckButton} onPress={() => console.log('pressed') }>
						<Text style={styles.deckTitle}>udacicards</Text>
						<Text style={styles.numberOfCards}>3 cards</Text>
					</TouchableOpacity>	
				</View>
				<View>
					<TouchableOpacity style={styles.deckButton} onPress={() => console.log('pressed') }>
						<Text style={styles.deckTitle}>udacicards</Text>
						<Text style={styles.numberOfCards}>3 cards</Text>
					</TouchableOpacity>	
				</View>				
			</View>
		);
	}
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1,
    backgroundColor: whiteSmoke,
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
	  padding: 36
  }
});

export default DeckListView;