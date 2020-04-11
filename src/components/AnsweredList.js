import React from 'react';
import { connect } from 'react-redux';
import QuestionsItem from './QuestionItem';

const AnsweredList = (props) => {
    // Array of question ids for all questions answered by currently authenticated user.
    const authedUserAnswerIds = Object.keys(props.users[props.authedUser].answers);
    return (
        <React.Fragment>
            <h1>Answered Questions</h1>
            <div className="ui segment">
                <div className="ui very relaxed divided items">
                    {authedUserAnswerIds.map(id => (
                        <React.Fragment key={id}>
                            <QuestionsItem id={id}/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    allQuestionIds: Object.keys(state.questions).sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp),
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(AnsweredList);