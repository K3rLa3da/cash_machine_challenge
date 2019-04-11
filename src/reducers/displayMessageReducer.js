import {displayTypes} from '../constants/dispatchTypes';
import {displayMessages} from '../constants/commonContants';

export default function (state = displayMessages.WELCOME_MESSAGE, action) {
    const {type, message} = action;
    if (type === displayTypes.SET_ACTIVE_MESSAGE) {
        return message;
    }
    return state;
}