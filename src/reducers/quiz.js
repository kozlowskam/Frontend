import {DELETE_QUIZ} from '../actions/quizzes' 

export default function(state = [], action) {
    switch (action.type) {
        
        case DELETE_QUIZ:
        return state.filter(quiz => quiz.id !== action.payload)

        default: 
        return state
    }
}
