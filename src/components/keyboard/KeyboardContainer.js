import React from 'react';
import FunctionalKeyboard from './FunctionalKeyboard';
import NumericKeyboard from './NumericKeybord';
import styles from '../../../public/styles/cash-machine-keyboard.scss'

const KeyboardContainer = () => (
    <div className={styles.container}>
        <NumericKeyboard/>
        <FunctionalKeyboard/>
    </div>
);

export default KeyboardContainer;