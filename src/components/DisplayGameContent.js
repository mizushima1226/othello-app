import React, { useContext } from 'react'

import OthelloContext from '../contexts/OthelloContext'

const DisplayGameContent = () => {
    const { state } = useContext(OthelloContext);
    
    const history = state.history;
    const current = history[state.stepNumber];
    return (
        <div className="counter bg-primary d-flex justify-content-center align-items-center">
            <div className="ml-2 circle bg-black"></div>
            <div className="ml-2 font-large">{current.blackNum}</div>
            <div className="ml-2 circle bg-white"></div>
            <div className="mx-2 font-large text-white">{current.whiteNum}</div>
        </div>
    );
    
}

export default DisplayGameContent;