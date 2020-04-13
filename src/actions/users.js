import { _getUsers } from '../_DATA';
const RECEIVE_USERS = 'RECEIVE_USERS';
const ADD_QUESTION_USER = 'ADD_QUESTION_USER';

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

// Action creator to add newly added question's id to the questions piece of redux store state.
const addQuestionUser = (question) => ({
    type:ADD_QUESTION_USER,
    question
});

export {RECEIVE_USERS, ADD_QUESTION_USER, receiveUsers, handleReceiveUsers, addQuestionUser};

