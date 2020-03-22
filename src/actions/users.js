'use strict';
import { _getUsers } from '../_DATA';
const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

// Thunk action creator to request all users from database.
const handleReceiveUsers = () => {
    return dispatch => {
        // Request all users from database.
        return _getUsers()
        // dispatch receiveUsers action with result from _getUsers async request.
        .then(users => {
            dispatch(receiveUsers(users))
        })
    }
};

export {RECEIVE_USERS};

