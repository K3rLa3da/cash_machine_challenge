import React from 'react';
import {connect} from 'react-redux';

import styles from '../../../public/styles/cash-mashine-display.scss'

const MessageDisplay = ({displayMessage}) => (
    <div className={styles.message}>
        {displayMessage}
    </div>
);

const mapStateToProps = state => ({
    displayMessage: state.displayMessage,
});

export default connect(mapStateToProps)(MessageDisplay);