import React from 'react';

import DisplayContainer from './components/display/DisplayContainer';
import KeyboardContainer from './components/keyboard/KeyboardContainer';
import styles from '../public/styles/common-app-styles.scss'

const App = () => (
    <div className={styles.container}>
        <DisplayContainer/>
        <KeyboardContainer/>
    </div>
);

export default App;
