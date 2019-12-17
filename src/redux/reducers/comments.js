import { SET_COMMENTS } from '../actions/types';

const initialState = {
	commentList: [],
};

const comments = (state = initialState, action) => {
	switch (action.type) {
		case SET_COMMENTS: return {
			...state,
			commentList: [...action.payload.commentList],
		};

		default:
			return state;
	}
};

export default comments;
