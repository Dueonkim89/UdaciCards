import { RECEIVE_DECK, ADD_QUESTION } from '../actions/index.js';

function deck(state = [], action) {
	const { title, questions, question, answer } = action;
	if (action.type === RECEIVE_DECK) {
		return [
			...state,
			{ title,
				questions
			}
		]
	} else if (action.type === ADD_QUESTION) {
		//want to preserve the order of the deck
		let deckPosition;
		//find the specific deck we need to add question
		let deckToAddQuestion = [...state].filter((x, index) => {
			if (x.title === title) {
				deckPosition = index;
			}
			return x.title === title;
		//once deck is found, map it and add on the question and answer. (Must be pure function)	
		}).map((specficDeck) => {
			return {...specficDeck, questions: [...specficDeck.questions, {question, answer}]}
		})
		//grab the remaining decks
		let updatedDeck = [...state].filter( x => x.title !== title );
		//add our modified deck to the exact same position that it was in
		updatedDeck.splice(deckPosition, 0, ...deckToAddQuestion);
		//return the updatedDeck
		return updatedDeck;
	} else {
		return state;
	}
	
}

export default deck;





