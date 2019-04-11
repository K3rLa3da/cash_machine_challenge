import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import applicationReducer from './reducers/reducers';

const applicationStore = createStore(applicationReducer, composeWithDevTools(applyMiddleware(thunk)));

export default applicationStore;
