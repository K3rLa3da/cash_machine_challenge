import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NumericKey from './NumericKey';

import {setNewAmountToWithdraw} from '../../actions/actions';


const NumericKeyboard = props => {
    const {cashAmount, displayMessage, actions: {setNewAmountToWithdraw}} = props;

    const addNumberToAmount = number => {
        if (cashAmount || number) {
            setNewAmountToWithdraw(`${cashAmount}${number}`, displayMessage);
        }
    };

    const generateKeyboard = () => (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(button => <NumericKey key={button}
                                                                 button={button}
                                                                 addNumberToAmount={addNumberToAmount}
        />)
    );

    return (
        <div className="numeric-keyboard">
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
            setNewAmountToWithdraw
        }, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(NumericKeyboard);