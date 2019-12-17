import { SET_COMMENTS } from './types';

export function setComments(newComments) {
	return {
		type: SET_COMMENTS,
		payload: { commentList: [...newComments] },
	}
}
