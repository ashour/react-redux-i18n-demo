import {
	SET_CONCERTS,
	GO_TO_NEXT_CONCERT,
	GO_TO_PREV_CONCERT,
} from './types';

export function setConcerts(newConcerts) {
	return {
		type: SET_CONCERTS,
		payload: { concertList: newConcerts },
	};
}

export function goToNextConcert() {
	return { type: GO_TO_NEXT_CONCERT };
}

export function goToPrevConcert() {
	return { type: GO_TO_PREV_CONCERT };
}
