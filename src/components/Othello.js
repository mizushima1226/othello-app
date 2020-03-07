import React,{useReducer} from 'react';
import '../css/othello.css';

import OthelloContext from '../contexts/OthelloContext';

import reducer from '../reducers/index';

import Game from './Game';

const Othello = () => {
    const initalState = {
        history: [],
        playerIsNext: true,
        stepNumber: 1,
        gameResult: ''
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
