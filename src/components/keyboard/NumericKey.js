import React from 'react';
import {connect} from 'react-redux';

import styles from '../../../public/styles/cash-machine-keyboard.scss'

const NumericKey = props => {
    const {button, addNumberToAmount} = props;
    const onKeyClick = () => addNumberToAmount(button);
    return (
        <div className={styles['numeric-key']}>
            <div className={styles['keyboard-key']}
                 onClick={onKeyClick}
            >
                {button}
            </div>
        </div>
    );
};
export default connect()(NumericKey);