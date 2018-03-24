import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

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
		console.log('AddCard');
		this.setState({ deckTitle: navigation.state.params.deckTitle });
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>We will add a card for {this.props.navigation.state.params.deckTitle} deck</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddCard;