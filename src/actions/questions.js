'use strict';
import _getQuestions from '../../_DATA';
const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export {RECEIVE_QUESTIONS, receiveQuestions}; 