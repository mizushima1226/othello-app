import {
    JUDGE_THE_GAME
} from '../actions/index';

import {
    CheckWinner
} from '../utils/othelloUtils';

const gameResult = (state = '', action) => {
    switch(action.type){
        case JUDGE_THE_GAME:
            return CheckWinner(action.bulackNum, action.whiteNum);
        default:
            return state;
    }
}

export default gameResult;