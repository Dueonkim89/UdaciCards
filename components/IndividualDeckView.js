import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { whiteSmoke, black, silver } from '../utils/colors.js';

class IndividualDeckView extends React.Component {
	//this will allow us to customize certain features of navigation props
	static navigationOptions = ({ navigation }) => {	
		return {
			title: navigation.state.params.deckTitle
		}
	}	
	componentDidMount () {
		console.log(this.props.navigation);
	}
	
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.deckTitle}>{navigation.state.params.deckTitle}</Text>
					{ navigation.state.params.deckQuestions.length <= 1 
						? <Text style={styles.numberOfCards}>{navigation.state.params.deckQuestions.length} card</Text>
						: <Text style={styles.numberOfCards}>{navigation.state.params.deckQuestions.length} cards</Text>
					}
				<View style={styles.buttonContainer}>	
					<TouchableOpacity style={styles.addCardButton}>
						<Text style={styles.addCardButtonText}>Add Card</Text>
					</TouchableOpacity>	
					<TouchableOpacity style={styles.startQuizButton}>
						<Text style={styles.startQuizButtonText}>Start Quiz</Text>
					</TouchableOpacity>	
				</View>
			</View>
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

export default IndividualDeckView;