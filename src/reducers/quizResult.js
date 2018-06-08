import {TAKE_QUIZ} from '../actions/takequiz'

const yourResult = '7/10'

export default function(state = '', action) {
    switch (action.type) {
        case TAKE_QUIZ:
        console.log(yourResult)
        return yourResult;

        default:
            return state
    }
}


// import { ADD_QUIZ } from "../actions/quiz";

// const quiz = {};

// export default function(state = quiz, action) {
//   switch (action.type) {
//     case ADD_QUIZ:
//       return action.payload;

//     default:
//       return state;
//   }
// }