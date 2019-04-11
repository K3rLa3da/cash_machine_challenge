import {combineReducers} from 'redux';

import cashAmount from './cashAmountReducer';
import displayMessage from './displayMessageReducer';
import spinner from './spinnerReducer';

export default combineReducers({
    cashAmount,
    displayMessage,
    spinner
});
