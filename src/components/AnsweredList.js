import React from 'react';
import { connect } from 'react-redux';
import QuestionsItem from './QuestionItem';

const AnsweredList = (props) => (
    <div>
        <button><h2>Answered Questions</h2></button>
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
    answeredIds: Object.keys(state.questions).filter(question => Object.keys(state.users[state.authedUser].answers)
        .includes(question)
    ),
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(AnsweredList);