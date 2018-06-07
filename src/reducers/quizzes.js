import {FETCHED_ALL_QUIZZES} from '../actions/quizzes'
import {DELETE_QUIZ} from '../actions/quizzes'

export default function(state = [], action ) {

    switch (action.type) {
        case FETCHED_ALL_QUIZZES:
            return action.payload

        case DELETE_QUIZ:
            return state.filter(quiz => quiz.id !== action.payload)
        
        default: 
            return state
    }  
}