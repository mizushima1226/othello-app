import React,{ useContext } from 'react';

import OthelloContext from '../contexts/OthelloContext';

import {
    COLOR_TYPE,
} from '../constants'

import {
    ADD_HISTORY,
    ADVANCE_STEP_NUMBER,
    CHANGE_ORDER,
    JUDGE_THE_GAME
} from '../actions/index'

import { GetReversedList } from '../utils/othelloUtils'

const Square = props => {
    const {state, dispatch} = useContext(OthelloContext);
    const row = props.row;
    const col = props.col;
    
    const handleClick =() => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [];
        current.squares.forEach(square => {
            squares.push(square.slice());
        });

        if (squares[row][col] !== '') {
            return;
        }

        const selfColor = current.nextPlayerIsBlack ? COLOR_TYPE.BLACK : COLOR_TYPE.WHITE;
        var reversedList = GetReversedList(row, col, squares, selfColor);
        if (reversedList.length === 0) {
            return;
        } else {
            reversedList.forEach(p => {
                squares[p.x][p.y] = selfColor;
            });
        }

        let blackNum = 0;
        let whiteNum = 0;
        switch (selfColor) {
            case COLOR_TYPE.BLACK:
                blackNum = current.blackNum + reversedList.length;
                whiteNum = current.whiteNum - reversedList.length + 1;
                break;
            case COLOR_TYPE.WHITE:
                whiteNum = current.whiteNum + reversedList.length;
                blackNum = current.blackNum - reversedList.length + 1;
                break;
            default:
                break;
        }
        
        dispatch({
            type: ADD_HISTORY,
            history: history.concat([{
                squares: squares,
                blackNum: blackNum,
                whiteNum: whiteNum,
                nextPlayerIsBlack: !current.nextPlayerIsBlack
            }])
        })
        dispatch({
            type: ADVANCE_STEP_NUMBER
        })
        dispatch({
            type: CHANGE_ORDER
        })
        dispatch({
            type: JUDGE_THE_GAME
        })
    }
    return(
        <button className = "square" onClick = {handleClick} >
            {props.colorType === COLOR_TYPE.BLACK ? 
                <div className='circle bg-black'></div> :
                props.colorType === COLOR_TYPE.WHITE ? 
                <div className='circle bg-white'></div> : ''
            }
        </button >
    );
}

export default Square;