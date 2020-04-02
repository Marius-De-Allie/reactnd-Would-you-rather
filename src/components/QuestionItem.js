import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {withRouter } from 'react-router-dom';

const QuestionItem = (props) => {
    const onPollBtnClick = (evt, questionId) => {
        evt.preventDefault();
        console.log('questionId', questionId);

    };
    return (
        <div>
            <h3><span>AVATAR!!</span>{props.author.name} asks:</h3>
            <p>...{[props.question.optionOne.text]}...</p>
            <Link to={`questions/${props.id}`}>
                View Poll
            </Link>
        </div>
    );
};


const mapStateToProps = ({questions, users, authedUser}, {id}) => {
    const question = questions[id];
    const author = users[question.author];

    return {
        question,
        author,
        questions,
        users,
        authedUser,
        id
    }
};

export default connect(mapStateToProps)(QuestionItem);

