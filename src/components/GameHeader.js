import React from 'react';
import DisplayGameContent from './DisplayGameContent';
import ToolButtons from './ToolButtons';

const GameHeader = () => {
    return (
        <div className="m-2 d-flex justify-content-center">
            <DisplayGameContent />
            <ToolButtons />
        </div>
    );
}

export default GameHeader;