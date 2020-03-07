import React, { useContext } from 'react'

import Board from './Board'

import OthelloContext from '../contexts/OthelloContext'

import {
    UPDATE_HISTORY,
    ADD_STEP_NUMBER,
    SUBTRACT_STEP_NUMBER,
    RESET_STEP_NUMBER,
    RESET_HISTORY
} from '../actions/index'

const Game = () => {
    const { state, dispatch } = useContext(OthelloContext);

    const HistoryBack = () => {
        if (state.stepNumber !== 0) {
            dispatch({ type: SUBTRACT_STEP_NUMBER });
        }
    }

    const HistoryMove = () => {
        if (state.history.length > state.stepNumber+1) {
            dispatch({ type: ADD_STEP_NUMBER });
        }
    }

    const GameReset = () => {
        if (window.confirm("リセットしますか？")) {
            dispatch({ type: RESET_HISTORY });
            dispatch({ type: RESET_STEP_NUMBER });
        }
    }

    const Pass = () => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [];
        current.squares.forEach(square => {
            squares.push(square.slice());
        });
        dispatch({
            type: UPDATE_HISTORY,
            history: history.concat({
                squares: squares,
                blackNum: current.blackNum,
                whiteNum: current.whiteNum,
                nextPlayerIsBlack: !current.nextPlayerIsBlack
            })
        })
        dispatch({ type: ADD_STEP_NUMBER })
    }

    const history = state.history;
    const current = history[state.stepNumber];
    const winner = state.result;
    if (winner) {
        alert("winner:" + winner);
    }
    return (
        <div className="mainContent">
            <div className="m-2 d-flex justify-content-center">
                <div className="counter bg-primary d-flex justify-content-center align-items-center">
                    <div className="ml-2 circle bg-black"></div>
                    <div className="ml-2 font-large">{current.blackNum}</div>
                    <div className="ml-2 circle bg-white"></div>
                    <div className="mx-2 font-large text-white">{current.whiteNum}</div>
                </div>
                <button className="ml-3 btn btn-warning" onClick={HistoryBack}>戻る</button>
                <button className="ml-3 btn btn-warning" onClick={HistoryMove}>進む</button>
                <button className="ml-3 btn btn-secondary" onClick={Pass}>パス</button>
                <button className="ml-3 btn btn-danger" onClick={GameReset}>リセット</button>
            </div>
            
            <div className="game"> 
                <div className="game-board">
                    <Board squares={current.squares} />
                </div>
            </div>
        </div>
    );
    
}

export default Game;