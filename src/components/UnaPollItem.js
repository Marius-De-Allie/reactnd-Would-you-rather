import React from 'react';
import { connect } from 'react-redux';
import NotfoundPage from './NotfoundPage';
import { addAnswer } from '../actions/users';
import { addVote } from '../actions/questions';

const UnaPollItem = (props) => {
    onFormSubmit = (evt) => {
        evt.preventDefault();
        const answer = evt.target.elements.poll.value;
        // Array of currently logged in user's answer ids.
        const authedUserAnswerIds = Object.keys(prop.users[props.authedUser].answers);
        if(authedUserAnswerIds.includes(props.pollid)) {
            alert(`You've already voted on this poll`);
        } else {
            // Declare object to hold all key properties for poll that has just been voted on.
            const ansPollObject = {
                authedUser: props.authedUser,
                qid: props.pollid,
                answer
            }
            // Dispatch actions to update users nd questions state in redux store accordingly when a poll is voted on.
            props.dispatch(addAnswer(ansPollObject));
        }
    };

    return (
        props.questions[props.pollid] === undefined ? <NotfoundPage /> :
        <div>
            <h3>Would you Rather</h3>
            <p>{props.users[props.questions[props.pollid].author].name} asks:</p>
            <form>
                <div>
                    <input type="radio" id="opt-one" name="poll" value="optionOne" />
                    <label htmlFor="opt-one">{props.questions[props.pollid].optionOne.text}</label>
                    <input type="radio" id="opt-two" name="poll" value="optionTwo" />
                </div>
                <div>
                    <input type="radio" id="opt-two" name="poll" value="optionTwo" />
                    <label htmlFor="opt-two">{props.questions[props.pollid].optionTwo.text}</label>
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

const mapStateToProps = ({users, questions, authedUser}, {pollid}) => ({
    users,
    questions,
    authedUser,
    pollid
});

export default connect(mapStateToProps)(UnaPollItem);