import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionForm extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Would you rather</h1>
                <div className="question-one">
                    <input type="radio" name="question" id="one" />
                </div>
                <div className="question-two">
                    <input type="radio" name="question" id="two" />
                </div>
                <button>Submit</button>
            </div>
        );
    }
};

const MapStateToProps = (state, { match }) => {
    const question = state.questions[match.params.question_id];
    return {
        questions: state.questions,
        users: state.users,
        authedUser: state.authedUser,
        question
    }
};

export default connect(MapStateToProps)(QuestionForm);