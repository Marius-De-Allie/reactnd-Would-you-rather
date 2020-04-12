import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import authedUser from './authedUser';

// Call combinereducers passing in all 3 reducers as object property values.
export default combineReducers({
    questions,
    users,
    authedUser
});