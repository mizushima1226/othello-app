import {
    ADVANCE_STEP_NUMBER
} from '../actions/index';

const stepNumber = (state = 0, action) => {
    switch(action.type){
        case ADVANCE_STEP_NUMBER:
            return state + 1;
        default:
            return state;
    }
}

export default stepNumber;