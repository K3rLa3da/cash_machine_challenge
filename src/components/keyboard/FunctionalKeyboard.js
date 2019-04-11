import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FunctionalKey from './FunctionalKey';

import {apiGetCashForWithdrawal, setNewAmountToWithdraw} from '../../actions/actions';

import {buttonNames} from '../../constants/commonContants';

const {ACCEPT_BUTTON, CANCEL_BUTTON, CORRECT_BUTTON} = buttonNames;

const FunctionalKeyboard = props => {
    const {cashAmount, displayMessage, actions: {apiGetCashForWithdrawal, setNewAmountToWithdraw}} = props;

    const buttonsData = [
        {name: CANCEL_BUTTON, color: 'red'},
        {name: CORRECT_BUTTON, color: 'orange'},
        {name: ACCEPT_BUTTON, color: 'green'},
    ];

    const getButtonFunction = buttonName => {
        switch (buttonName) {
            case CANCEL_BUTTON:
                return () => setNewAmountToWithdraw('', displayMessage);
            case CORRECT_BUTTON: {
                const newAmount = cashAmount ? cashAmount.slice(0, -1) : '';
                return () => setNewAmountToWithdraw(newAmount, displayMessage);
            }
            case ACCEPT_BUTTON:
                return () => apiGetCashForWithdrawal(+cashAmount);
            // no default
        }
    };

    const generateKeyboard = () => (
        buttonsData.map(button => <FunctionalKey key={button.name}
                                                 button={button}
                                                 onButtonClick={getButtonFunction(button.name)}
        />)
    );
    return (
        <div className="functional-keyboard">
            {generateKeyboard()}
        </div>
    );
};

const mapStateToProps = state => ({
    cashAmount: state.cashAmount,
    displayMessage: state.displayMessage,
});

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators({
            apiGetCashForWithdrawal,
            setNewAmountToWithdraw
        }, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalKeyboard);