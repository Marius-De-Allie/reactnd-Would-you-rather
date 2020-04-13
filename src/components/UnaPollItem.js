import React from 'react';
import { connect } from 'react-redux';
import NotfoundPage from './NotfoundPage';
import { _saveQuestionAnswer } from '../_DATA';
import '../styles/components/unaPollItem.css';

const UnaPollItem = (props) => {
    const onFormSubmit = (evt) => {
        evt.preventDefault();
        const answer = evt.target.elements.poll.value;
        // Array of currently logged in user's answer ids.
        const authedUserAnswerIds = Object.keys(props.users[props.authedUser].answers);
        if(authedUserAnswerIds.includes(props.pollid)) {
            alert(`You've already voted on this poll`);
        } else {
            // Declare object to hold all key properties for poll that has just been voted on.
            const ansPollObject = {
                authedUser: props.authedUser,
                qid: props.pollid,
                answer
            }
            // Dispatch actions to update users and questions state in redux store, as well as backend database when a poll is voted on.
        }
    };

    return (
        props.questions[props.pollid] === undefined ? <NotfoundPage /> :
        <div className="ui centered card">
            <div className="content" id="avatar">
                <img 
                    className="ui avatar image" 
                    src={'/' + props.users[props.questions[props.pollid].author].avatarURL}
                    alt={`${props.users[props.questions[props.pollid].author].name}'s avatar`}
                />
                {props.users[props.questions[props.pollid].author].name} asks:
            </div>
            <div className="content">
                <h2 className="ui header">Would you Rather</h2>
                <div className="description">
                    <form className="ui form" onSubmit={onFormSubmit}>
                        <div className="grouped fields">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" id="opt-one" name="poll" value="optionOne" />
                                    <label htmlFor="opt-one">{props.questions[props.pollid].optionOne.text}</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" id="opt-two" name="poll" value="optionTwo" />
                                    <label htmlFor="opt-two">{props.questions[props.pollid].optionTwo.text}</label>
                                </div>
                            </div>
                        </div>
                        <button className="fluid ui blue button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
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