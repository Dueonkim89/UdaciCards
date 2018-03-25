import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { fetchDeck, storeData, deleteData } from '../utils/api.js';
import { steelBlue, black, silver } from '../utils/colors.js';

class AddCard extends React.Component {
	static navigationOptions = ({ navigation }) => {	
		return {
			title: 'Add Card'
		}
	}	

	state = {
		question: null,
		answer: null,
		dataInAS: null,
		deckTitle: null
	}
	
	componentDidMount () {
		const { navigation } = this.props;
		fetchDeck()
			.then((decks) => {
				//set state for dataInAS & deckTitle
				this.setState({ deckTitle: navigation.state.params.deckTitle, dataInAS: decks });
			})				
	}
	
	render() {
		const { deckTitle, dataInAS, question, answer } = this.state;
		return (
			<View style={styles.container}>
				<TextInput style={styles.textInput}
					underlineColorAndroid={'transparent'}
					placeholderTextColor={silver}
					placeholder='Enter new question here.' value={question}
					onChangeText={(text) => this.setState({question: text})}
				/>	
				<TextInput style={styles.textInput}
					underlineColorAndroid={'transparent'}
					placeholderTextColor={silver}
					placeholder='Enter answer here.' value={answer}
					onChangeText={(text) => this.setState({answer: text})}
				/>
				<View style={styles.buttonView}>
					<TouchableOpacity style={styles.submitButton} 
					
					>
						<Text style={styles.submitButtonText}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',		
	},
	textInput: {	
		marginTop: 30,
		marginBottom: 18,
		borderWidth: 2,
		marginLeft: 14,
		marginRight:14,
		padding: 20,
		paddingBottom: 14,
		borderRadius: 7,
		borderColor: steelBlue,
		color: black,
		fontSize: 16
	},
	buttonView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 0
	},
	submitButton: {
		borderColor: steelBlue,
		backgroundColor: steelBlue,
		padding: 20,
		paddingLeft: 75,
		paddingRight: 75,
		borderRadius: 5,	
		borderWidth: 2,	
	},
	submitButtonText: {
		fontSize: 22,	
		color: silver,
		fontWeight: 'bold'
	}
});

export default AddCard;