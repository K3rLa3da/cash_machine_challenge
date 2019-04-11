import React from 'react';

import DisplayContainer from './components/display/DisplayContainer';
import KeyboardContainer from './components/keyboard/KeyboardContainer';

const App = () => (
    <div className="cash-machine-container">
        <DisplayContainer/>
        <KeyboardContainer/>
    </div>
);

export default App;
