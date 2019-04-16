import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './store/reducers';

export const SEND_MESSAGE = "SEND_MESSAGE";

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector('#root'))