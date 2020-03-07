import React,{useReducer} from 'react';
import '../css/othello.css';

import OthelloContext from '../contexts/OthelloContext';

import {
    COLOR_TYPE,
    V_CELL_NUM,
    H_CELL_NUM
} from '../constants'

import reducer from '../reducers/index';

import Game from './Game';

const Othello = () => {
    const squares = [];
    for (let rowNum = 0; rowNum < V_CELL_NUM; rowNum++) {
        squares[rowNum] = Array(H_CELL_NUM).fill('');
    }
    squares[4][5] = COLOR_TYPE.BLACK;
    squares[5][4] = COLOR_TYPE.BLACK;
    squares[4][4] = COLOR_TYPE.WHITE;
    squares[5][5] = COLOR_TYPE.WHITE;

    const initialHistory = {
        squares: squares,
        blackNum: 2,
        whiteNum: 2,
    }
    
    const initalState = {
        history: [initialHistory],
        firstPlayerIsNext: true,
        stepNumber: 0,
        gameResult: null
    }
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <OthelloContext.Provider value={{state, dispatch}}>
            <h1>Othello</h1>
            <Game />
        </OthelloContext.Provider>
    );
}

export default Othello;
