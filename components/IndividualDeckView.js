import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { whiteSmoke, black, silver } from '../utils/colors.js';
import { connect } from 'react-redux';

class IndividualDeckView extends React.Component {
	//this will allow us to customize certain features of navigation props
	static navigationOptions = ({ navigation }) => {	
		return {
			title: navigation.state.params.deckTitle
		}
	}	
	
	render() {
		const { navigation, specficDeck } = this.props;
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.deckTitle}>{navigation.state.params.deckTitle}</Text>
					{ specficDeck[0].questions.length <= 1 
						? <Text style={styles.numberOfCards}>{specficDeck[0].questions.length} card</Text>
						: <Text style={styles.numberOfCards}>{specficDeck[0].questions.length} cards</Text>
					}
				<View style={styles.buttonContainer}>	
					<TouchableOpacity style={styles.addCardButton}
						onPress={() => navigation.navigate(
							'AddCard',
							{ deckTitle: specficDeck[0].title }
					)}>
						<Text style={styles.addCardButtonText}>Add Card</Text>
					</TouchableOpacity>	
					<TouchableOpacity style={styles.startQuizButton} 
						onPress={() => navigation.navigate(
							'Quiz',
							{questions: specficDeck[0].questions}
					)}>
						<Text style={styles.startQuizButtonText}>Start Quiz</Text>
					</TouchableOpacity>	
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: whiteSmoke
	},
	deckTitle: {
		fontSize: 44,
		textAlign: 'center',
		marginTop: 34,
		marginBottom: 6,
	},
	numberOfCards: {
		fontSize: 26,
		textAlign: 'center',
		color: silver
	},
	buttonContainer: {
		marginTop: 155,
		justifyContent: 'center',
		alignItems: 'center'
	},	
	addCardButton: {
		marginBottom: 16,
		borderColor: black,
		padding: 20,
		paddingLeft: 75,
		paddingRight: 75,		
		borderRadius: 5,
		borderWidth: 2
	},
	startQuizButton: {
		borderColor: silver,
		backgroundColor: silver,
		padding: 20,
		paddingLeft: 75,
		paddingRight: 75,
		borderRadius: 5,	
		borderWidth: 2
	},
	addCardButtonText: {
		fontSize: 22,
		color: black
	},
	startQuizButtonText: {
		fontSize: 22,	
		color: whiteSmoke
	}
});

function mapStateToProps(deck , { navigation }) {
  return {
    specficDeck: deck.filter( x => x.title === navigation.state.params.deckTitle )
  }
}

export default connect(mapStateToProps)(IndividualDeckView);