import React from 'react';
import {connect} from 'react-redux';

const NumericKey = props => {
    const {button, addNumberToAmount} = props;
    const onKeyClick = () => addNumberToAmount(button);
    return (
        <div className="numeric-key-container">
            <div className="keyboard-key"
                 onClick={onKeyClick}
            >
                {button}
            </div>
        </div>
    );
};
export default connect()(NumericKey);