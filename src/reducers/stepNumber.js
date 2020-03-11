import {
    ADD_STEP_NUMBER,
    SUBTRACT_STEP_NUMBER,
    RESET_STEP_NUMBER
} from '../actions/index';

const stepNumber = (state = 0, action) => {
    switch(action.type){
        case ADD_STEP_NUMBER:
            return state + 1;
        case SUBTRACT_STEP_NUMBER:
            return state - 1;
        case RESET_STEP_NUMBER:
            return 0;
        default:
            return state;
    }
}

export default stepNumber;