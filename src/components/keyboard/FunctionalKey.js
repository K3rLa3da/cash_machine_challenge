import React from 'react';

const FunctionalKey = props => {
    const {button: {name, color}, onButtonClick} = props;
    return (
        <div className="functional-key-container">
            <div className={`keyboard-key ${color}`}
                 onClick={onButtonClick}
            >
                {name}
            </div>
        </div>
    );
};

export default FunctionalKey;