import React from 'react';
import FunctionalKeyboard from './FunctionalKeyboard';
import NumericKeyboard from './NumericKeybord';

const KeyboardContainer = () => (
    <div className="keyboard-container">
        <NumericKeyboard/>
        <FunctionalKeyboard/>
    </div>
);

export default KeyboardContainer;