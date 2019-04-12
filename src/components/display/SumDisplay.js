import React from 'react';
import {connect} from 'react-redux';

import styles from '../../../public/styles/cash-mashine-display.scss'

const SumDisplay = ({cashAmount}) => (
    <input className={styles.sum}
           readOnly
           value={cashAmount || 0}
    />
);

const mapStateToProps = state => ({
    cashAmount: state.cashAmount,
});

export default connect(mapStateToProps)(SumDisplay);