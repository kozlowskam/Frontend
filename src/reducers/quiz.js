import { ADD_QUIZ } from "../actions/quiz";

const quiz = {};

export default function(state = quiz, action) {
  switch (action.type) {
    case ADD_QUIZ:
      return action.payload;

    default:
      return state;
  }
}
