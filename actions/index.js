export const RECEIVE_DECK = 'RECEIVE_DECK';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveDeck({title, questions}) {
	return {
		type: RECEIVE_DECK,
		title,
		questions
	}
}

export function addQuestion({title, question, answer}) {
	return {
		type: ADD_QUESTION,
		title,
		question,
		answer
	}
}

export function addDeck({title}) {
	return {
		type: ADD_DECK,
		title
	}
}