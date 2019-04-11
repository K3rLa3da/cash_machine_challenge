import {apiRequest} from './api';
import applicationStore from '../applicationStore';
import {runSpinner, setActiveMessage, stopSpinner, updateAmountToWithdraw} from './actionCreators';
import {availableNotes, displayMessages} from '../constants/commonContants';

const {CASH_SUM__ERROR, WELCOME_MESSAGE} = displayMessages;

export const calcCashWithoutApi = selectedAmount => {
    const cash = [];
    const restAmount = availableNotes.reduce((amount, note) => {
        const noteQty = Math.floor(amount / note);
        if (noteQty) {
            cash.push({note, noteQty});
        }
        return amount % note;
    }, selectedAmount);
    return {cash, restAmount};
};

export const generateSuccessMessage = cash => dispatch => {
    let successMessage = 'Success! You got:';
    cash.forEach(result => {
        const {note, noteQty} = result;
        if (noteQty) {
            successMessage = ` ${successMessage} $${note} - ${noteQty} note${noteQty > 1 ? 's' : ''};`;
        }
    });
    dispatch(setActiveMessage(successMessage));
};

export const apiGetCashForWithdrawal = amount => async dispatch => {
    dispatch(runSpinner('Preparing cash, please wait...'));
    let response = await apiRequest(`cashMachine/${amount}`);
    if (response.error) {
        response = calcCashWithoutApi(amount);
    }
    const {cash, restAmount} = response;
    if (restAmount || !cash.length) {
        dispatch(setActiveMessage(CASH_SUM__ERROR));
    } else {
        generateSuccessMessage(cash)(dispatch);
        dispatch(updateAmountToWithdraw(''));
    }
    dispatch(stopSpinner());
};

export const setNewAmountToWithdraw = (amount, currentMessage) => dispatch => {
    const {spinner} = applicationStore.getState();
    if (!spinner.isSpinnerActive) {
        if (currentMessage !== WELCOME_MESSAGE) {
            dispatch(setActiveMessage(WELCOME_MESSAGE));
        }
        dispatch(updateAmountToWithdraw(amount));
    }
};
