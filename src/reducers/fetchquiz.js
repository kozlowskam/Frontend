import { FETCH_QUIZ } from "../actions/quizzes";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_QUIZ:
      return action.payload;

    default:
      return state;
  }
}
