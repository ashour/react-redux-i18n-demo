import { SET_CONCERTS } from '../actions/types';

const initialState = {
	activeConcert: null,
	concertList: ['U2', 'Michael Jackson'],
};

const concerts = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONCERTS: return {
			...state,
			concertList: [...action.payload.concertList],
		};

		default: return state;
	};
};

export default concerts;
