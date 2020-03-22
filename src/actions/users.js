'use strict';
import { _getUsers } from '../_DATA';
const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export {RECEIVE_USERS, receiveUsers};

