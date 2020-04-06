import { _getUsers } from '../_DATA';
const RECEIVE_USERS = 'RECEIVE_USERS';
const ADD_ANSWER = 'ADD_ANSWER';
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

// Action creator to add answer id to users piece of state
const addAnswer = ({authedUser, qid, answer}) => ({
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer
});

export {RECEIVE_USERS, ADD_ANSWER, handleReceiveUsers, addAnswer};

