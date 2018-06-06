import {FETCHED_ALL_QUIZZES} from '../actions/quizzes'

export default function(state = [], action ) {
    console.log(action.payload)
    switch (action.type) {
        case FETCHED_ALL_QUIZZES:
        return action.payload
        
        default : return state
    }  
}