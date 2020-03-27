'use strict';
import { _getUsers } from '../_DATA';
const RECEIVE_USERS = 'RECEIVE_USERS';
const ADD_ANSWER = 'ADD_ANSWER';

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

const addAnswer = (qid) => ({
    type: ADD_ANSWER,
    answer: qid
});

export {RECEIVE_USERS, ADD_ANSWER, handleReceiveUsers, addAnswer};

