'use strict';
import { RECEIVE_QUESTIONS } from '../actions/questions';

// Questions reducer, has default state of an empty object {}.
const questions = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions}
        default:
            return state;
    }
};

export default questions;