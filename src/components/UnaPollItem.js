import React from 'react';
import { connect } from 'react-redux';
import NotfoundPage from './NotfoundPage';

const UnaPollItem = (props) => {

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