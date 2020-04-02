import React from 'react';
import { connect } from 'react-redux';
import QuestionsItem from './QuestionItem';

const AnsweredList = (props) => {
    // Array of question ids for all questions answered by currently authenticated user.
    const authedUserAnswerIds = Object.keys(this.props.users[this.props.authedUser].answers);
    return (
        <div>
            <h3>Answered Questions</h3>
            <ul>
                {authedUserAnswerIds.map(id => (
                    <li key={id}>
                        <QuestionsItem id={id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};


const mapStateToProps = (state) => ({
    allQuestionIds: Object.keys(state.questions).sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp),
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(AnsweredList);