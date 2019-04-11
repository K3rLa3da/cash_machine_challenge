import React from 'react';
import {connect} from 'react-redux';

const MessageDisplay = ({displayMessage}) => (
    <div className="message-display-container">
        {displayMessage}
    </div>
);

const mapStateToProps = state => ({
    displayMessage: state.displayMessage,
});

export default connect(mapStateToProps)(MessageDisplay);