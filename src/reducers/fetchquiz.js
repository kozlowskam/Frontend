import {FETCH_QUIZ} from '../actions/quizzes' 

export default function(state = {}, action) {

    switch (action.type) {
        
        case FETCH_QUIZ:
        return action.payload

        default: 
        return state
    }

}
