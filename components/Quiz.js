import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Quiz extends React.Component {
	static navigationOptions = ({ navigation }) => {	
		return {
			title: 'Quiz'
		}
	}		

	componentDidMount () {
		console.log(this.props.navigation);
	}

	render() {		
		const { navigation } = this.props;
		return (
			<View style={{flex: 1}}>
				<Text>{navigation.state.params.questions.length} questions</Text>
			</View>
		);	
	}
	
}




export default Quiz;