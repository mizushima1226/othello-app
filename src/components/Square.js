import React from 'react';

// import {
//     BLACK,
//     WHITE
// } from '../utils/Const'

const Square = props => {
    return(
        <button className = "square" onClick = {() => props.onClick} >
            <div className={props.cssClass}></div>
        </button >
    );
}

export default Square;