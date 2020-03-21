import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
// Import reducers from combineReducers function call.
import reducer from './reducers';

ReactDOM.render(<App />, document.getElementById('root'));

