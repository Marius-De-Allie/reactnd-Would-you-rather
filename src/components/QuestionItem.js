import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Import stylesheet
import '../styles/components/questionItem.css';

const QuestionItem = (props) => {
    return (
        <div className="middle aligned item">
            <img 
                className="ui avatar image" 
                src={props.users[props.questions[props.id].author].avatarURL}
                alt={`${props.users[props.questions[props.id].author].name}'s avatar image`}
            />
            <div className="content">
                <h4 className="ui header">{props.users[props.questions[props.id].author].name} asked:</h4>
                <h2 className="ui header">Would you Rather</h2>
                <div className="description">
                    <p>...{[props.question.optionOne.text]}...</p>
                </div>
            </div>
            <div className="extra">
                <Link 
                    className="ui right floated button"
                    to={`questions/${props.id}`}>
                    View Poll
                    <i className="right chevron icon"></i>
                </Link>
            </div>
        </div>
    );
};


const mapStateToProps = ({questions, users, authedUser}, {id}) => {
    const question = questions[id];
    const author = users[question.author];

    return {
        question,
        author,
        questions,
        users,
        authedUser,
        id
    }
};

export default connect(mapStateToProps)(QuestionItem);

