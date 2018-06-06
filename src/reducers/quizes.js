import {FETCHED_ALL_QUIZES} from '../actions/quizes'

export default function(state = [], action ) {
    switch (action.type) {
        case FETCHED_ALL_QUIZES:
        return action.payload
        
        default : return state
    }  
}