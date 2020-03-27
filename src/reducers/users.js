'use strict';
import { RECEIVE_USERS, ADD_ANSWER } from '../actions/users';


// Users reducer, has default state of an empty object {}.
const users = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_USERS:
            return {...state, ...action.users}
        case ADD_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [action.qid]: answer
                    }
                }
            }
        default:
            return state;
    }
};

export default users;