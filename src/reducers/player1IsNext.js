import {
    Change_Order
} from '../actions/index';

const player1IsNext = (state = true, action) => {
    switch(action.Type){
        case Change_Order:
            return !state;
        default:
            return state;
    }
}

export default player1IsNext;