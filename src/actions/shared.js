import {_saveQuestionAnswer } from '../_DATA';
import { addQuestion } from './questions';

const handleAnswerQuestion = (authedUser, qid, answer) => {
    return (dispatch) => {
        return _saveQuestionAnswer(authedUser, qid, answer)
        .then((result) => console.log(result));
    }
};