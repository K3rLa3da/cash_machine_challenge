import React from 'react';
import {connect} from 'react-redux';

const SumDisplay = ({cashAmount}) => (
    <input className="sum-display-container"
           readOnly
           value={cashAmount || 0}
    />
);

const mapStateToProps = state => ({
    cashAmount: state.cashAmount,
});

export default connect(mapStateToProps)(SumDisplay);