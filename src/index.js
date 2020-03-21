import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
// Import reducers from combineReducers function call.
import reducer from './reducers';
// Import middleware from applyMiddleware function call.
import middleware from './middleware';

ReactDOM.render(<App />, document.getElementById('root'));

