import React,{useReducer} from 'react';
import '../css/othello.css';

import OthelloContext from '../contexts/OthelloContext';
import { initState } from '../utils/othelloUtils'

import Game from './Game';

import reducer from '../reducers/index';

const Othello = () => {
    const [state, dispatch] = useReducer(reducer, initState());

    return (
        <OthelloContext.Provider value={{ state, dispatch }}>
            <div className='container center'>
                <h1>Othello</h1>
                <Game />
            </div>
        </OthelloContext.Provider>
    );
}

export default Othello;
