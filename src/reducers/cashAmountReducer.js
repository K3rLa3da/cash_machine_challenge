import {displayTypes} from '../constants/dispatchTypes';

export default function (state = '', action) {
    const {type, sum} = action;
    if (type === displayTypes.SET_CASH_AMOUNT) {
        return sum;
    }
    return state;
}