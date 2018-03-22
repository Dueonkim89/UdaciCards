import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { whiteSmoke, red, green, black, silver } from '../utils/colors.js';

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
		const { currentQuestion, showAnswer, score } = this.state;
		return (
			<View style={{flex: 1, backgroundColor: whiteSmoke}}>
				{ currentQuestion >= navigation.state.params.questions.length 
				  ?	<View style={styles.scoreContainer}>
						<Text style={styles.scoreText}>You scored {score} out of {navigation.state.params.questions.length} correct!
						</Text>
						<View style={{flex: 1, marginTop: 95, justifyContent: 'center', alignItems: 'center'}}>
							<TouchableOpacity style={styles.restartButton}>
								<Text style={styles.restartText}>Restart Quiz</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.deckButton}>
								<Text style={styles.deckText}>Back to Deck</Text>
							</TouchableOpacity>
						</View>
					</View>	
				  : <View style={{flex: 1}}>
					  <Text style={styles.questionCounter}>{currentQuestion + 1} / {navigation.state.params.questions.length}</Text>
						<View style={styles.container}>
							{ showAnswer 
								? 	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 65}}>
										<Text style={styles.question}>{navigation.state.params.questions[currentQuestion].answer}</Text>	
										<TouchableOpacity>
											<Text style={styles.answerButtonText}>Question</Text>
										</TouchableOpacity> 										
									</View>
								: 	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 65}}>								
										<Text style={styles.question}>{navigation.state.params.questions[currentQuestion].question}</Text> 
										<TouchableOpacity>
											<Text style={styles.answerButtonText}>Answer</Text>
										</TouchableOpacity>
									</View> 										
							}															
							<View style={{marginTop: 25, flex: 1}}>	
								{/* Wrap buttons in view to have them be the same size*/}
								<TouchableOpacity style={styles.correctButton}><Text style={styles.correctButtonText}>Correct</Text></TouchableOpacity>				
								<TouchableOpacity style={styles.incorrectButton}><Text style={styles.incorrectButtonText}>Incorrect</Text></TouchableOpacity>
							</View>
						</View>
					</View>
				}
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
		marginTop: 20,
		marginBottom: 5		
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
	},
	scoreContainer: {
		flex: 1, 
		marginTop: 34
	},
	scoreText: {
		textAlign: 'center',
		fontSize: 22,		
	},
	restartButton: {
		marginBottom: 16,
		borderColor: black,
		padding: 20,
		paddingLeft: 75,
		paddingRight: 75,		
		borderRadius: 5,
		borderWidth: 2		
	},
	restartText: {
		fontSize: 22,
		color: black		
	},
	deckButton: {
		borderColor: silver,
		backgroundColor: silver,
		padding: 20,
		paddingLeft: 75,
		paddingRight: 75,
		borderRadius: 5,	
		borderWidth: 2		
	},
	deckText: {
		fontSize: 22,	
		color: whiteSmoke		
	}
});


export default Quiz;