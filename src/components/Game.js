import React, { useContext, useEffect } from 'react'

import Board from './Board'
import GameHeader from './GameHeader';

import OthelloContext from '../contexts/OthelloContext';

import { JUDGE_THE_GAME } from '../actions/index';

import { COLOR_TYPE } from '../constants';

const Game = () => {
    const { state, dispatch } = useContext(OthelloContext);
    const current = state.history[state.stepNumber];
    useEffect(() => {
        dispatch({
            type: JUDGE_THE_GAME,
            blackNum: current.blackNum,
            whiteNum: current.whiteNum
        })
        switch(state.gameResult){
            case COLOR_TYPE.BLACK:
                window.alert('黒の勝ち');
                break;
            case COLOR_TYPE.WHITE:
                window.alert('白の勝ち');
                break;
            default:
                break;
        }
    });
    
    return (
        <div className="center">
            <GameHeader />
            <Board squares={current.squares} />
        </div>
    );
}

export default Game;