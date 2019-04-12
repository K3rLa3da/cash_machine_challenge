import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import MessageDisplay from './MessageDisplay';
import SumDisplay from './SumDisplay';
import DisplayHeader from './DisplayHeader';
import SpinnerDisplay from './SpinnerDisplay';

import styles from '../../../public/styles/cash-mashine-display.scss'

const DisplayContainer = props => {
    const {spinner: {isSpinnerActive, spinnerText}} = props;
    return (
        <div className={styles.container}>
            <DisplayHeader/>
            {!isSpinnerActive &&
            <Fragment>
                <MessageDisplay/>
                <SumDisplay/>
            </Fragment>}
            {isSpinnerActive && <SpinnerDisplay spinnerText={spinnerText}/>}
        </div>
    );
};

const mapStateToProps = state => ({
    spinner: state.spinner,
});

export default connect(mapStateToProps)(DisplayContainer);