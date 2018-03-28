import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { white, silver, black, steelBlue, whiteSmoke } from './utils/colors.js';
import { Constants } from 'expo';
import Deck from './components/Deck.js';
import NewDeck from './components/NewDeck.js';
import IndividualDeckView from './components/IndividualDeckView.js';
import reducer from './reducers/index.js';
import DeckListView from './components/DeckListView.js';
import Quiz from './components/Quiz.js';
import AddCard from './components/AddCard.js';
import { setNotification } from './utils/api.js';

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
});

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs,
	},
	IndividualDeckView: {
		screen: IndividualDeckView,
		navigationOptions: {
			headerTintColor: whiteSmoke,
			headerStyle: {
				backgroundColor: silver
			}	
		}
	},
	DeckListView: {
		screen: DeckListView
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			headerTintColor: whiteSmoke,
			headerStyle: {
				backgroundColor: silver
			}	
		}		
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			headerTintColor: whiteSmoke,
			headerStyle: {
				backgroundColor: silver
			}	
		}		
	}
})

const store = createStore(reducer);

function TheStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

export default class App extends React.Component {
	componentDidMount() {
		//method to invoke Notification to reminder app user to study to be built here. 
		setNotification();
		console.log('in App component');
	}
	
	render() {
		return (
			<Provider store={store}>
				<View style={{flex: 1}}>
					<TheStatusBar backgroundColor={steelBlue} barStyle='light-content'/>
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}

