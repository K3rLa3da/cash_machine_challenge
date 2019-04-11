import {displayTypes, spinnerTypes} from '../constants/dispatchTypes';

export const updateAmountToWithdraw = sum => ({
    type: displayTypes.SET_CASH_AMOUNT,
    sum
});

export const setActiveMessage = message => ({
    type: displayTypes.SET_ACTIVE_MESSAGE,
    message
});

export const runSpinner = (spinnerText = 'Loading data') => ({
    type: spinnerTypes.RUN_SPINNER,
    spinnerText
});
export const stopSpinner = () => ({
    type: spinnerTypes.STOP_SPINNER
});