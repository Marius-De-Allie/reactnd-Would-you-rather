import React from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

const UnansweredList = (props) => {
    // Array of  all question ids for all questions answered by currently authenticated user.
    const authedUserAnswerIds = Object.keys(props.users[props.authedUser].answers);
    const unAnsweredIds = props.allQuestionIds.filter(questionId => !authedUserAnswerIds.includes(questionId));
    return (
        <React.Fragment>
            <h1>Un-Answered Questions</h1>
            {unAnsweredIds.length > 0 ? (
                <div className="ui segment">
                    <div className="ui very relaxed divided items">
                        {unAnsweredIds.map(id => (
                            <React.Fragment key={id}>
                                <QuestionItem id={id}/>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            ) : 
            (
                <div className="ui segment">
                    <h3>{props.users[props.authedUser].name} has no un-answered questions.</h3>
                </div>
            )
        }
        </React.Fragment>
    )
};


const mapStateToProps = (state) => ({
    allQuestionIds: Object.keys(state.questions).sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp),
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(UnansweredList);