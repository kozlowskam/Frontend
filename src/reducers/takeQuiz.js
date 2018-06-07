import { TAKE_QUIZ } from "../actions/takequiz";
export default function(state = {}, action) {
  switch (action.type) {
    case TAKE_QUIZ:
      console.log("do you see my?");
      return action.payload;

    default:
      return state;
  }
}
