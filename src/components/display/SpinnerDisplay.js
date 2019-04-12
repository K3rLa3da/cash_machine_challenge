import React from 'react';

import styles from '../../../public/styles/cash-mashine-display.scss'
import spinner from '../../../public/styles/spinner.scss'

const SpinnerDisplay = ({spinnerText}) => (
    <div className={styles.message}>
        {spinnerText}
        <div className={spinner['lds-ellipsis']}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
);

export default SpinnerDisplay;