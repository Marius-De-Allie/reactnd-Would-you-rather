import React from 'react';
import { connect } from 'react-redux';
import QuestionsItem from './QuestionItem';

const AnsweredList = (props) => (
    <div>
        <ul>
            {props.answeredIds.map(id => (
                <li key={id}>
                    <QuestionsItem id={id}/>
                </li>
            ))}
        </ul>
    </div>
);


const mapStateToProps = (state) => ({
    allQuestionIds: Object.keys(state.questions).sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp),
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(AnsweredList);