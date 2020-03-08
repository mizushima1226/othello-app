import React, { useContext } from 'react'

import OthelloContext from '../contexts/OthelloContext'

import {
    UPDATE_HISTORY,
    ADD_STEP_NUMBER,
    SUBTRACT_STEP_NUMBER,
    RESET_STEP_NUMBER,
    RESET_HISTORY,
    RESET_RESULT
} from '../actions/index'

const ToolButtons = () => {
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
            dispatch({ type: RESET_RESULT });
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

    const isGameSet = state.gameResult != null;

    return (
        <>
            <button className="ml-3 btn btn-warning" disabled={isGameSet} onClick={HistoryBack}>戻る</button>
            <button className="ml-3 btn btn-warning" disabled={isGameSet} onClick={HistoryMove}>進む</button>
            <button className="ml-3 btn btn-secondary" disabled={isGameSet} onClick={Pass}>パス</button>
            <button className="ml-3 btn btn-danger" onClick={GameReset}>リセット</button>
        </>
    )
}

export default ToolButtons;