import {_saveQuestionAnswer, _saveQuestion } from '../_DATA';
import { addQuestion } from './questions';
import { addQuestionUser } from './users';

const handleAnswerQuestion = (authedUser, qid, answer) => {
    return (dispatch) => {
        return _saveQuestionAnswer(authedUser, qid, answer)
        .then((result) => console.log(result));
    }
};

// Thunk action creator for adding question to database asynchronously and to redux store.
const handleAddQuestion = (questionObj) => {
    return(dispatch) => {
        

    }
};