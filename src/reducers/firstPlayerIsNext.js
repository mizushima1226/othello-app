import {
    CHANGE_ORDER
} from '../actions/index';

const firstPlayerIsNext = (state = true, action) => {
    switch (action.type) {
        case CHANGE_ORDER:
            return !state;
        default:
            return state;
    }
}

export default firstPlayerIsNext;