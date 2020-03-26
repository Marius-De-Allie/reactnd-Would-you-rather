import React from 'react';
import { connect } from 'react-redux';

const QuestionItem = (props) => {
    const onPollBtnClick = (evt, questionId) => {
        evt.preventDefault();
        
    };
    return (
        <div>
            <h3>{props.author.name} asks:</h3>
            <div>
                <div>Avatar Image</div>{/*Convert to img element*/}
                <div className="question-content">
                    <h3>Would you Rather</h3>
                    <p>...{[props.question.optionOne.text]}...</p>
                    <button>View Poll</button>
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

export default connect(mapStateToProps)(QuestionItem);

