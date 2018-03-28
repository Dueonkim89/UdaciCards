const DECK_DATA_KEY = 'DeckKey';
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const defaultData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Redux: {
	title: 'Redux',
    questions: [
      {
        question: 'Does Redux only work with React and React-Native?',
        answer: 'False, Redux is agnostic to framework and can be used with Angular and Vue as well.'
      }
    ]	
  }
}

export function fetchDeck() {
	return AsyncStorage.getItem(DECK_DATA_KEY)
		.then((data) => { if (data === null) {
			storeData();	
			return defaultData;
		} else {
			return JSON.parse(data);
		}})				
}

export function storeData(updatedData) {
	updatedData === undefined ? AsyncStorage.setItem(DECK_DATA_KEY, JSON.stringify(defaultData)) : AsyncStorage.setItem(DECK_DATA_KEY, JSON.stringify(updatedData))
}

export function deleteData() {
	return AsyncStorage.removeItem(DECK_DATA_KEY);
}

function createNotification() {
	return {
		title: 'Daily study reminder!',
		body: "👉 Don't forget to study today!",
		android: {
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true
		}
	}
}

export function setNotification() {
	Permissions.askAsync(Permissions.NOTIFICATIONS)
		.then(( { status } ) => {
			if (status === 'granted') {
				Notifications.cancelAllScheduledNotificationsAsync();
				
				//set daily reminder time to 12pm
				let tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				tomorrow.setHours(12);
				tomorrow.setMinutes(0);

				Notifications.scheduleLocalNotificationAsync(
					createNotification(),
					{
						time: tomorrow,
						repeat: 'day',
					}
				)				
			}			
		})
}

export function clearNotification() {
	return Notifications.cancelAllScheduledNotificationsAsync();
}

