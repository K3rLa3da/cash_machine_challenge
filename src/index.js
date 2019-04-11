import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import applicationStore from './applicationStore';
import App from './App';

import '../public/styles/app.scss';

ReactDOM.render(
    <Provider store={applicationStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
