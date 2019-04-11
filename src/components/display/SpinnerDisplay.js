import React from 'react';

const SpinnerDisplay = ({spinnerText}) => (
    <div className="message-display-container">
        {spinnerText}
        <div className="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
);

export default SpinnerDisplay;