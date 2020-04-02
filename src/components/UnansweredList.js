import React from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

const UnansweredList = (props) => {
    // Array of  all question ids for all questions answered by currently authenticated user.
    const authedUserAnswerIds = Object.keys(props.users[props.authedUser].answers);
    const unAnsweredIds = props.allQuestionIds.filter(questionId => !authedUserAnswerIds.includes(questionId));
    return (
        <div>
            <h3>Un-Answered Questions</h3>
            <ul>
                {unAnsweredIds.map(id => (
                    <li key={id}>
                        <QuestionItem id={id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};


const mapStateToProps = (state) => ({
    allQuestionIds: Object.keys(state.questions).sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp),
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(UnansweredList);