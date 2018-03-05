import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Deck from './components/Deck.js';
import NewDeck from './components/NewDeck.js';

const Tabs = TabNavigator({
	Deck: {
		screen: Deck,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: () => 	<MaterialCommunityIcons name='cards-outline' size={30} color='red'/>
		}					
	},
	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarLabel: 'Add New Deck',
			tabBarIcon: () => 	<MaterialIcons name='library-add' size={30} color='red'/>
		}
	}
})


export default class App extends React.Component {
	componentDidMount() {
		console.log(Platform.OS);
	}
	
	render() {
		return (
			<View style={{flex: 1}}>
				<Tabs />
				<View style={styles.container}>
					<Text>Open up App.js to start working on your app!</Text>
					<Text>Changes you make will automatically reload.</Text>
					<Text>Shake your phone to open the developer menu.</Text>
				</View>
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
