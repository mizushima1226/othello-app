import React, { useContext, useEffect } from 'react'

import Board from './Board'
import GameHeader from './GameHeader';

import OthelloContext from '../contexts/OthelloContext';

import { JUDGE_THE_GAME } from '../actions/index';

import { COLOR_TYPE } from '../constants';

const Game = () => {
    const { state, dispatch } = useContext(OthelloContext);
    useEffect(() => {
        let currentHistory = state.history[state.stepNumber];
        dispatch({
            type: JUDGE_THE_GAME,
            blackNum: currentHistory.blackNum,
            whiteNum: currentHistory.whiteNum
        })
        switch(state.gameResult){
            case COLOR_TYPE.BLACK:
                window.alert('black win');
                break;
            case COLOR_TYPE.WHITE:
                window.alert('white win');
                break;
            default:
                break;
        }
    });
    const current = state.history[state.stepNumber];
    const winner = state.result;
    if (winner) {
        alert("winner:" + winner);
    }
    return (
        <div className="mainContent">
            <GameHeader />
            <Board squares={current.squares} />
        </div>
    );
}

export default Game;