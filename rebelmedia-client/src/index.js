import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/login';

import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const allReducers = combineReducers({
    user: userReducer
})

const store = createStore(
    allReducers,
    {
        user: ''
    }
);

ReactDOM.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root')
);
