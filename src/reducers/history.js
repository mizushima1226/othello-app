import {
    ADD_HISTORY,
    ADVANCE_HISTORY,
    REVERT_HISTORY
} from '../actions/index';

const history = (state = [], action) => {
    switch(action.type){
        case ADD_HISTORY:
            return action.history;
        case ADVANCE_HISTORY:
            return state;
        case REVERT_HISTORY:
            return state;
        default:
            return state;
    }
}

export default history;