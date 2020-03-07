import {
    UPDATE_HISTORY,
    RESET_HISTORY,
} from '../actions/index';

import { initHistory } from '../utils/othelloUtils'

const history = (state = [], action) => {
    switch(action.type){
        case UPDATE_HISTORY:
            return action.history;
        case RESET_HISTORY:
            return initHistory();
        default:
            return state;
    }
}

export default history;