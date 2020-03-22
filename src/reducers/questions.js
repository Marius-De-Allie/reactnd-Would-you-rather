'use strict';
import { RECEIVE_QUESTIONS } from '../actions/questions';

// Questions reducer, has default state of an empty object {}.
const questions = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default questions;