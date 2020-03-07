import React from 'react';
import '../css/othello.css';

import Game from './Game'

const Othello = () => {
    return (
        <>
            <div>
                <h1>Othello</h1>
                <div>
                    <Game />
                </div>
            </div>
        </>
    )
}

export default Othello;
