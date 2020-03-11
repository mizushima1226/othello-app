import React from 'react';

import {
    COLOR_TYPE
} from '../constants';

import Square from './Square';

const Board = ({squares}) => {
    const rows = [];
    const cols = [];
    for(let num = 1; num <= 8; num++){
        rows[num-1] = num;
        cols[num-1] = num;
    }

    const IsBlack = (row,col) => {
        return squares[row][col] === COLOR_TYPE.BLACK
    }
    const IsWhite = (row,col) => {
        return squares[row][col] === COLOR_TYPE.WHITE
    }

    const renderSquare = (row,col,index) => {
        let colorType = 
            IsBlack(row, col) ? COLOR_TYPE.BLACK :
                IsWhite(row, col) ? COLOR_TYPE.WHITE : ""
        return (
            <Square
                key={index}
                row={row}
                col={col}
                colorType={colorType}
            />
        );
    }

    return (
        <div className="game"> 
            <div className="game-board">
            {rows.map( (row, index) => {
                return (
                    <div key={index} className="board-row">
                        {cols.map( (col, index) => renderSquare(row,col,index) )}
                    </div>
                );
            })}
            </div>
        </div>
            
    )
}

export default Board;