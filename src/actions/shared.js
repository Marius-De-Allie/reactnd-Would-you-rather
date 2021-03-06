import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA';
import { receiveQuestions, addQuestion } from './questions';
import { receiveUsers, addQuestionUser } from './users';

// ADD_ANSWER action type.
const ADD_ANSWER = 'ADD_ANSWER';

// Thunk action creator for loading initial data.
const getInitialData = () => {
    return (dispatch) => {
        // Call async API functions to retrive users and questions from database.
        return Promise.all([
            _getUsers(),
            _getQuestions(),
        ])
        // Dispatch receiveUsers and receiveQuestions actions with response from API functions.
        .then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        })
        .catch(e => {
            console.log('Unable to load initial user and question data.', e);
        })
    }
};

// Action creator to add poll answer to both users and questions pieces of redux store state.
const addAnswer = ({authedUser, qid, answer}) => ({
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer
});

// Thunk action creator to add poll answer to both users and questions pieces of redux store state and update backend using _saveQuestionAnswer async function.
const handleAddAnswer = (questionObj) => {
    return (dispatch) => {
        dispatch(addAnswer(questionObj));
        _saveQuestionAnswer(questionObj)
        .catch(e => console.log('Unable to add answer to database', e));
    }
};

// Thunk action creator for adding question to database asynchronously and to redux store.
const handleAddQuestion = (questionObj) => {
    return(dispatch) => {
        // Call API async function to save question to DB.
        return _saveQuestion(questionObj)
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionUser(question));
        })
        .catch(e => {
            alert('Error adding new poll, please try again!', e);
        });
    }
};

export {getInitialData as default, ADD_ANSWER, handleAddAnswer, handleAddQuestion};