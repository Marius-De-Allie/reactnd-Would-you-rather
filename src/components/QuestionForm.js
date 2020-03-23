import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionForm extends Component {
    render() {
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

const MapStateToProps = (state) => ({
    questions: state.questions
});