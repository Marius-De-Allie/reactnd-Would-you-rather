import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
// Import reducers from combineReducers function call.
import reducer from './reducers';
// Import middleware from applyMiddleware function call.
import middleware from './middleware';

// CREATE REDUX STORE.
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

