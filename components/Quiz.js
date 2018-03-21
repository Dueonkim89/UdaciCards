import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { whiteSmoke, red, green } from '../utils/colors.js';

class Quiz extends React.Component {
	static navigationOptions = ({ navigation }) => {	
		return {
			title: 'Quiz'
		}
	}

	state = {
		currentQuestion: 0,
		score: 0,
		showAnswer: false
	}

	componentDidMount () {
		console.log(this.props.navigation);
	}

	render() {		
		const { navigation } = this.props;
		const { currentQuestion, showAnswer } = this.state;
		return (
			<View style={{flex: 1, backgroundColor: whiteSmoke}}>
				<Text style={styles.questionCounter}>{currentQuestion + 1} / {navigation.state.params.questions.length}</Text>
				<View style={styles.container}>
					{ showAnswer 
						? 	<Text style={styles.question}>{navigation.state.params.questions[		currentQuestion].answer}</Text>						
						: 	<Text style={styles.question}>{navigation.state.params.questions[currentQuestion].question}</Text> 						
					}
					{ showAnswer 
						? <TouchableOpacity><Text style={styles.answerButtonText}>Question</Text></TouchableOpacity> 
						: <TouchableOpacity><Text style={styles.answerButtonText}>Answer</Text></TouchableOpacity> 
					}					
					<TouchableOpacity style={styles.correctButton}><Text style={styles.correctButtonText}>Correct</Text></TouchableOpacity>				
					<TouchableOpacity style={styles.incorrectButton}><Text style={styles.incorrectButtonText}>Incorrect</Text></TouchableOpacity>						
				</View>
			</View>
		);	
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	questionCounter: {
		fontSize: 17,
		marginTop: 7,
		marginLeft: 15
	},
	question: {
		fontSize: 26,
		textAlign: 'center',
	},
	answerButtonText: {
		color: red,
		fontSize: 16,
		marginTop: 12,
		marginBottom: 38		
	},
	correctButton: {
		marginBottom: 16,
		borderColor: green,
		backgroundColor: green,
		padding: 20,
		paddingLeft: 78,
		paddingRight: 78,		
		borderRadius: 5,
		borderWidth: 2		
	},
	correctButtonText: {
		fontSize: 18,	
		color: whiteSmoke		
	},
	incorrectButton: {
		borderColor: red,
		backgroundColor: red,
		padding: 20,
		paddingLeft: 78,
		paddingRight: 78,
		borderRadius: 5,	
		borderWidth: 2	
	},
	incorrectButtonText: {
		fontSize: 18,	
		color: whiteSmoke		
	}	
});


export default Quiz;