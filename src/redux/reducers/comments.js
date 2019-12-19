import {
  SET_COMMENTS_FOR_CONCERT,
  PREPEND_COMMENT_FOR_CONCERT,
} from "../actions/types";

const initialState = {
  commentMap: {},
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS_FOR_CONCERT:
      return {
        ...state,
        commentMap: {
          ...state.commentMap,
          [action.payload.concertId]: [...action.payload.commentList],
        },
      };

    case PREPEND_COMMENT_FOR_CONCERT:
      return {
        ...state,
        commentMap: {
          ...state.commentMap,
          [action.payload.concertId]: [
            { ...action.payload.comment },
            ...state.commentMap[action.payload.concertId],
          ],
        },
      };

    default:
      return state;
  }
};

export default comments;
