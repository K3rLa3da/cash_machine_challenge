import {spinnerTypes} from '../constants/dispatchTypes';

const initialState = {
    isSpinnerActive: false,
    spinnerText: ''
};

function spinner(state = initialState, action) {
    switch (action.type) {
        case spinnerTypes.RUN_SPINNER:
            return {isSpinnerActive: true, spinnerText: action.spinnerText};
        case spinnerTypes.STOP_SPINNER:
            return initialState;
        default:
            return state;
    }
}

export default spinner;