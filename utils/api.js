const DECK_DATA_KEY = 'DeckKey';
import { AsyncStorage } from 'react-native';

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

function storeData(updatedData) {
	if (updatedData === undefined) {
		AsyncStorage.setItem(DECK_DATA_KEY, JSON.stringify(defaultData));
	} else {
		AsyncStorage.setItem(DECK_DATA_KEY, JSON.stringify(updatedData));
	}	
}

function deleteData() {
	AsyncStorage.removeItem(DECK_DATA_KEY)
}

