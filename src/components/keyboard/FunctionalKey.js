import React from 'react';
import styles from '../../../public/styles/cash-machine-keyboard.scss'

const FunctionalKey = props => {
    const {button: {name, color}, onButtonClick} = props;
    return (
        <div className={styles['functional-key']}>
            <div className={`${styles[color]} ${styles[`keyboard-key`]}`}
                 onClick={onButtonClick}
            >
                {name}
            </div>
        </div>
    );
};

export default FunctionalKey;