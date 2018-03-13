export const RECEIVE_DECK = 'RECEIVE_DECK';
//export const ADD_DECK = 'ADD_DECK';
//export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveDeck({title, questions}) {
	return {
		type: RECEIVE_DECK,
		title,
		questions
	}
}

