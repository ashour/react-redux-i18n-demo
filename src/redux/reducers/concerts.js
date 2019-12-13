import {
	SET_CONCERTS,
	GO_TO_NEXT_CONCERT,
	GO_TO_PREV_CONCERT,
} from '../actions/types';

const initialState = {
	concertList: [],
	activeConcertId: null,
};

const concerts = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONCERTS: return {
			...state,
			concertList: [...action.payload.concertList],
			activeConcertId: action.payload.concertList[0].id,
		};

		case GO_TO_NEXT_CONCERT: return {
			...state,
			activeConcertId: getNextActiveConcertId(state),
		};

		case GO_TO_PREV_CONCERT: return {
			...state,
			activeConcertId: getPrevActiveConcertId(state),
		};

		default: return state;
	};
};

function getNextActiveConcertId(state) {
	return state.activeConcertId + 1 > getLastConcertId(state.concertList) ?
		1 :
		state.activeConcertId + 1;
}

function getPrevActiveConcertId(state) {
	return state.activeConcertId - 1 < 1 ?
		getLastConcertId(state.concertList) :
		state.activeConcertId - 1;
}

function getLastConcertId(concertList) {
	return Math.max(...concertList.map(concert => concert.id));
}

export default concerts;
