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
            <h3>{props.author.name} asks:</h3>
            <div>
                <div>Avatar Image</div>{/*Convert to img element*/}
                <div className="question-content">
                    <h3>Would you Rather</h3>
                    <p>...{[props.question.optionOne.text]}...</p>
                    <Link to={`questions/${props.question.id}`}>
                        View Poll
                    </Link>
                </div>
            </div>
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
        authedUser
    }
};

export default withRouter(connect(mapStateToProps)(QuestionItem));

