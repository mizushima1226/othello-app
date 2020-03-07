import { combineReducers } from 'redux';

import history from './history';
import player1IsNext from './player1IsNext';
import stepNumber from './stepNumber'
import gameResult from './gameResult'

export default combineReducers(
    history,
    player1IsNext,
    stepNumber,
    gameResult
);