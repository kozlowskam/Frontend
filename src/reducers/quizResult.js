import {TAKE_QUIZ} from '../actions/takequiz'

const yourResult = {
    id: 60,
    input: [
        {
            id: 1,
            userAnswer: 'a'
        },
        {
            id: 2,
            userAnswer: 'b'
        },
        {
            id: 3,
            userAnswer: 'c'
        }
    ],
    quizId: 1,
    score: 3,
    userId: 1
}
// const response.body

export default function(state = {}, action) {
    switch (action.type) {

        case TAKE_QUIZ:
            return yourResult;
            // action.payload

        default:
            return state
    }
}
