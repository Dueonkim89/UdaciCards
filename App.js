import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { white, silver, black, steelBlue, whiteSmoke } from './utils/colors.js';
import { Constants } from 'expo';
import Deck from './components/Deck.js';
import NewDeck from './components/NewDeck.js';

const Tabs = TabNavigator({
	Deck: {
		screen: Deck,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: ({ tintColor }) => 	<MaterialCommunityIcons name='cards-outline' size={30} color={tintColor}/>
		}					
	},
	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarLabel: 'Add New Deck',
			tabBarIcon: ({ tintColor }) => 	<MaterialIcons name='library-add' size={30} color={tintColor}/>
		}
	}
}, {
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: black, 
		showIcon: true,
		style: {
			height: 56,
			backgroundColor: silver, 
			shadowColor: 'rgba(0, 0, 0, 0.24)',
			shadowOffset: {
				width: 0,
				height: 3
			 },
			shadowRadius: 6,
			shadowOpacity: 1			
		}
	}
})

function TheStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}


export default class App extends React.Component {
	componentDidMount() {
		console.log(Platform.OS);
	}
	
	render() {
		return (
		
			<View style={{flex: 1}}>
				<TheStatusBar backgroundColor={steelBlue} barStyle='light-content'/>
				<Tabs />
				<View style={styles.container}>
					<Text>This is the default view!</Text>
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
