import { combineReducers } from 'redux';

import history from './history';
import firstPlayerIsNext from './firstPlayerIsNext';
import stepNumber from './stepNumber'
import gameResult from './gameResult'

export default combineReducers({
    history,
    firstPlayerIsNext,
    stepNumber,
    gameResult
});