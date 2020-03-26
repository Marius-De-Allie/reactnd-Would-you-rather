import React from 'react';
import { connect } from 'react-redux';
import QuestionsItem from './QuestionItem';

const UnansweredList = (props) => {
    console.log(props);
    return (
        <div>
            <button><h2>Unanswered Questions</h2></button>
            <ul>
                {props.UnansweredIds.map(id => (
                    <li key={id}>
                        <QuestionsItem />
                    </li>
                ))}
            </ul>
        </div>
    )
};


const mapStateToProps = (state) => ({
    UnansweredIds: Object.keys(state.questions).filter(question => !Object.keys(state.users[state.authedUser].answers)
        .includes(question)
    ),
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(UnansweredList);