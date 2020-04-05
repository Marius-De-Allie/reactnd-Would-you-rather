import React from 'react';
import { connect } from 'react-redux';

const AnsPollItem = (props) => {
    const renderUI = () => {
        const {users, questions, authedUser, pollid} = props;
        // Calculate total number votes for selected question.
        const totalVotes = questions[pollid].optionOne.votes.length + questions[pollid].optionTwo.votes.length;
        // Calculate number votes for selected poll's 1st option.
        const optionOneVotes = questions[pollid].optionOne.votes.length;
        // Calculate number votes for selected poll's 2nd option.
        const optionTwoVotes = questions[pollid].optionTwo.votes.length;

        if(questions[pollid] === undefined) {
            return <h3>No poll with this ID exists, please try again</h3>
        } else {
            return (
                <React.Fragment>
                    <h3>Would you Rather</h3>
                    <p>{users[questions[pollid].author].name} asks:</p>
                    <ul>
                        <li>
                            {questions[pollid].optionOne.text}
                            {questions[pollid].optionOne.votes.includes(users[authedUser]) && <span> your selection</span>}
                        </li>
                        <p>{questions[pollid].optionOne.votes.length} {optionOneVotes !== 1 ? 'votes' : 'vote'} / 
                            {Math.round(optionOneVotes / totalVotes * 100)}%
                        </p>
                        <li>
                            {questions[pollid].optionTwo.text}
                            {questions[pollid].optionTwo.votes.includes(users[authedUser]) && <span> your selection</span>}
                        </li>
                        <p>{questions[pollid].optionTwo.votes.length} {optionTwoVotes !== 1 ? 'votes' : 'vote'} / 
                            {Math.round(optionTwoVotes / totalVotes * 100)}%
                        </p>
                    </ul>
                </React.Fragment>
            );
        }
    };
    
    return (
        <div>
        
        </div>
    );
};

const mapStateToProps = ({users, questions, authedUser}, {pollid}) => ({
    users,
    questions,
    authedUser,
    pollid
});

export default connect(mapStateToProps)(AnsPollItem);