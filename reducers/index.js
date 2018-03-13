import { RECEIVE_DECK } from '../actions/index.js';

function deck(state = [], action) {
	const { title, questions } = action;
	if (action.type === RECEIVE_DECK) {
		return [
			...state,
			{ title,
				questions
			}
		]
	} else {
		return state;
	}
	
}

export default deck;





