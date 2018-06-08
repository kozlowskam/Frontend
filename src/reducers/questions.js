import { ADD_QUESTION } from "../actions/questions";

const question = {};

export default function(state = question, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return action.payload;

    default:
      return state;
  }
}
