import {_saveQuestionAnswer } from '../_DATA';

const handleAnswerQuestion = (authedUser, qid, answer) => {
    return (dispatch) => {
        return _saveQuestionAnswer(authedUser, qid, answer)
        .then((result) => console.log(result));
    }
};