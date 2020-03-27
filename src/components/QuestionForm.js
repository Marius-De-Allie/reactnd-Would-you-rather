import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionForm extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Would you rather</h1>
                <div className="question-one">
                    <input type="radio" name="question" />
                </div>
                <div className="question-two">
                    <input type="radio" name="question" />
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
        question

    }
};

export default connect(MapStateToProps)(QuestionForm);