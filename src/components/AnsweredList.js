import React from 'react';
import { connect } from 'react-redux';
import QuestionsItem from './QuestionItem';

const AnsweredList = (props) => {
    // Array of question ids for all questions answered by currently authenticated user.
    const authedUserAnswerIds = Object.keys(props.users[props.authedUser].answers);
    return (
        <React.Fragment>
            <h3>Answered Questions</h3>
            <div className="ui segment">
                <div className="ui very relaxed divided items">
                    {authedUserAnswerIds.map(id => (
                        <li key={id}>
                            <QuestionsItem id={id}/>
                        </li>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(AnsweredList);