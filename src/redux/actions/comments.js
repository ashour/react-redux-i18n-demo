import { SET_COMMENTS_FOR_CONCERT, PREPEND_COMMENT_FOR_CONCERT } from "./types";

export function setCommentsForConcert(concertId, newComments) {
  return {
    type: SET_COMMENTS_FOR_CONCERT,
    payload: {
      concertId,
      commentList: [...newComments],
    },
  };
}

export function prependCommentForConcert(concertId, newComment) {
  return {
    type: PREPEND_COMMENT_FOR_CONCERT,
    payload: {
      concertId,
      comment: { ...newComment },
    },
  };
}
