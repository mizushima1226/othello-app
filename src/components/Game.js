import React, { useContext } from 'react'

import Board from './Board'

import OthelloContext from '../contexts/OthelloContext'

import {
    COLOR_TYPE,
    H_CELL_NUM,
    V_CELL_NUM,
} from '../constants'

import {
    ADD_HISTORY,
    ADVANCE_STEP_NUMBER,
} from '../actions/index'

const Game = () => {
    const { state, dispatch } = useContext(OthelloContext)
    const HistoryBack = () => {
        if (state.stepNumber === 0) {
            return;
        }
        this.setState({
            stepNumber: state.stepNumber - 1,
            firstIsNext: !state.firstIsNext,
        });
    }

    const HistoryMove = () => {
        if (state.history.length <= state.stepNumber+1) {
            return;
        }
        // this.setState({
        //     stepNumber: this.state.stepNumber + 1,
        //     firstIsNext: !this.state.firstIsNext,
        // });
    }

    const GameReset = () => {
        if (!window.confirm("リセットしますか？")) {
            return;
        }
        var squares = [];
        for (var rowNum = 0; rowNum < V_CELL_NUM; rowNum++) {
            squares[rowNum] = Array(H_CELL_NUM).fill(null);
        }
        squares[4][5] = COLOR_TYPE.BLACK;
        squares[5][4] = COLOR_TYPE.BLACK;
        squares[4][4] = COLOR_TYPE.WHITE;
        squares[5][5] = COLOR_TYPE.WHITE;
        this.setState({
            history: [{
                squares: squares,
                blackNum: 2,
                whiteNum: 2,
            }],
            firstIsNext: true,
            stepNumber: 0,
        });
    }

    const Pass = () => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [];
        current.squares.forEach(square => {
            squares.push(square.slice());
        });
        dispatch({
            type: ADD_HISTORY,
            history: history.concat({
                squares: squares,
                blackNum: current.blackNum,
                whiteNum: current.whiteNum,
                nextPlayerIsBlack: !current.nextPlayerIsBlack
            })
        })

        dispatch({ type: ADVANCE_STEP_NUMBER })

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