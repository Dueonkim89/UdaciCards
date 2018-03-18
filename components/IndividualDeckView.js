import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class IndividualDeckView extends React.Component {
	//this will allow us to customize certain features of navigation props
	static navigationOptions = ({ navigation }) => {	
		return {
			title: 'Other Decks'
		}
	}	
	componentDidMount () {
		console.log('Inside IndividualDeckView');
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.navigation.state.params.deckTitle}</Text>
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

export default IndividualDeckView;