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
        // const colorType = 
        //     IsBlack(row,col) ? "circle bg-black" : IsWhite(row,col) ? "circle bg-white": ""
        let colorType = 
            IsBlack(row,col) ? COLOR_TYPE.BLACK : IsWhite(row,col) ? COLOR_TYPE.WHITE : ""
        return (
            <Square
                key={index}
                row={row}
                col={col}
                colorType={colorType}
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