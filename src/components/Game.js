import React, { useContext } from 'react'

import Board from './Board'
import GameHeader from './GameHeader';

import OthelloContext from '../contexts/OthelloContext'

const Game = () => {
    const { state } = useContext(OthelloContext);
    
    const current = state.history[state.stepNumber];
    const winner = state.result;
    if (winner) {
        alert("winner:" + winner);
    }
    return (
        <div className="mainContent">
            <GameHeader />
            <Board squares={current.squares} />
        </div>
    );
}

export default Game;