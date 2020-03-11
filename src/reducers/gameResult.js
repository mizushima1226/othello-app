import {
    JUDGE_THE_GAME,
    RESET_RESULT
} from '../actions/index';

import {
    CheckWinner
} from '../utils/othelloUtils';

const gameResult = (state = '', action) => {
    switch(action.type){
        case JUDGE_THE_GAME:
            return CheckWinner(action.blackNum, action.whiteNum);
        case RESET_RESULT:
            return null;
        default:
            return state;
    }
}

export default gameResult;