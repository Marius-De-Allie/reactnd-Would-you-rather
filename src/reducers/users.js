'use strict';
import { RECEIVE_USERS } from '../actions/users';

// Users reducer, has default state of an empty object {}.
const users = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default users;