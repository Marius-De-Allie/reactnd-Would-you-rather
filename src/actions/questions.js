'use strict';
// Import getQuestions async API function.
import { _getQuestions } from '../_DATA';
const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
const ADD_VOTE = 'ADD_VOTE';

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
});

// Thunk action creator to request all questions in database.
const handleReceiveQuestions = () => {
    return (dispatch) => {
        // Request all questions from database.
        return _getQuestions()
        // dispatch receivequestions action with result from _getQuestions async request.
        .then((questions) => {
            // console.log(questions);
            dispatch(receiveQuestions(questions))
        })
    }
};

const addVote = ({authedUser, qid, answer}) => ({
    type: ADD_VOTE,
    authedUser,
    qid,
    answer
});

export {RECEIVE_QUESTIONS, ADD_VOTE, handleReceiveQuestions, addVote}; 