'use strict';
const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export {RECEIVE_QUESTIONS, receiveQuestions};