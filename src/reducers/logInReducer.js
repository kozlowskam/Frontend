import { LOG_IN } from "../actions/logInSignUpAction";

export default function(state = [], action) {
  switch (action.type) {
    case LOG_IN:
      return [...state, action.payload];

    default:
      return state;
  }
}
