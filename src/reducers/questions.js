import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../actions/questions';

// Questions reducer, has default state of an empty object {}.
const questions = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions}
        case ADD_VOTE:
            return {
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.answer] : {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.includes(action.authedUser) ? [...state[action.qid][action.answer].votes] : state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state;
    }
};

export default questions;