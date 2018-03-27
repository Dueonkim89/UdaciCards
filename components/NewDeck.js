import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { steelBlue, black, silver, red, whiteSmoke } from '../utils/colors.js';
import { fetchDeck, storeData, deleteData } from '../utils/api.js';


class NewDeck extends React.Component {
	state = {
		dataInAS: null,
		title: '',
		empty: false
	}
	
	componentDidMount () {
		fetchDeck()
			.then((decks) => {
				//set state for dataInAS
				this.setState({ dataInAS: decks });
			})		
	}
	
	createNewDeck = () => {
		console.log('creating new deck');
	}
	
	render() {
		const { title } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.title}>What is the title of your new deck?</Text>
				<TextInput style={styles.titleInput} 
					underlineColorAndroid={'transparent'}
					placeholderTextColor={silver}
					placeholder='Enter new title here.'
					value={title}
					onChangeText={(text) => this.setState({title: text})}
				/>
				<View style={styles.buttonView}>
					<TouchableOpacity style={styles.submitButton}
						onPress={this.createNewDeck}
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
		backgroundColor: whiteSmoke,
	},
	title: {
		textAlign: 'center',
		marginTop: 42,
		color: black,
		fontSize: 30,
		marginBottom: 26
	},
	titleInput: {
		marginTop: 24,
		marginBottom: 20,
		borderWidth: 3,
		marginLeft: 14,
		marginRight:14,
		padding: 20,
		paddingBottom: 14,
		borderRadius: 7,
		borderColor: steelBlue,
		color: black,
		fontSize: 22		
	},
	buttonView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 12		
	},
	submitButtonText: {
		fontSize: 22,	
		color: silver,
		fontWeight: 'bold'
	},
	submitButton: {
		borderColor: steelBlue,
		backgroundColor: steelBlue,
		padding: 20,
		paddingLeft: 75,
		paddingRight: 75,
		borderRadius: 5,	
		borderWidth: 2,	
	}	
});



export default connect()(NewDeck);