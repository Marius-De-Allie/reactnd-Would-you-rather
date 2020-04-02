import React from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

const UnansweredList = (props) => {
    console.log(props);
    return (
        <div>
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
    allQuestionIds: Object.keys(state.questions),
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(UnansweredList);