import React, { useContext } from 'react'

import OthelloContext from '../contexts/OthelloContext'

const DisplayGameContent = () => {
    const { state } = useContext(OthelloContext);
    
    const history = state.history;
    const current = history[state.stepNumber];
    return (
        <div className="counter bg-primary d-flex justify-content-center align-items-center">
            <div className="ml-2 circle bg-black"></div>
            <div className="ml-2 font-large">
                {current.nextPlayerIsBlack ?
                    <span className='text-danger'>{current.blackNum}</span> :
                    <span className='text-body'>{current.blackNum}</span>
                }
            </div>
            <div className="ml-2 circle bg-white"></div>
            <div className="mx-2 font-large">
                {current.nextPlayerIsBlack ?
                    <span className='text-white'>{current.whiteNum}</span> :
                    <span className='text-danger'>{current.whiteNum}</span>
                }
            </div>
        </div>
    );
    
}

export default DisplayGameContent;