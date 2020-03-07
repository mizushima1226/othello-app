import React from 'react';

import {
    BLACK,
    WHITE
} from '../utils/Const';

import Square from './Square';

const Board = ({squares, onClick}) => {
    const rows = [];
    const cols = [];
    for(let num = 1; num <= 8; num++){
        rows[num-1] = num;
        cols[num-1] = num;
    }

    const IsBlack = (row,col) => {
        return squares[row][col] === BLACK
    }
    const IsWhite = (row,col) => {
        return squares[row][col] === WHITE
    }

    const renderSquare = (row,col,index) => {
        const cssClass = 
            IsBlack(row,col) ? "circle bg-black" : IsWhite(row,col) ? "circle bg-white": ""
        return (
            <Square
                key={index}
                onClick={() => onClick(row,col)}
                cssClass={cssClass}
            />
        );
    }

    return(
        <>
            {rows.map( (row, index) => {
                    return (
                        <div key={index} className="board-row">
                            {cols.map( (col, index) => renderSquare(row,col,index) )}
                        </div>
                    );
                } 
            )}
        </>
    )
}

export default Board;