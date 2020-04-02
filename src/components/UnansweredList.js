import React from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

const UnansweredList = (props) => {
    // Array of  all question ids for all questions answered by currently authenticated user.
    const authedUserAnswerIds = Object.keys(this.props.users[this.props.authedUser].answers);
    return (
        <div>
            <h3>Un-Answered Questions</h3>
            <ul>
                {props.UnansweredIds.map(id => (
                    <li key={id}>
                        <QuestionItem id={id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};


const mapStateToProps = (state) => ({
    allQuestionIds: Object.keys(state.questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(UnansweredList);