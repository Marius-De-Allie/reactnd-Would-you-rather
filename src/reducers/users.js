import { RECEIVE_USERS, ADD_ANSWER, ADD_QUESTION_USER } from '../actions/users';


// Users reducer, has default state of an empty object {}.
const users = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state, 
                ...action.users
            };
        case ADD_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case ADD_QUESTION_USER:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            }
        default:
            return state;
    }
};

export default users;