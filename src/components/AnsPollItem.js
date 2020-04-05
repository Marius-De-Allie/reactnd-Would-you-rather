import React from 'react';
import { connect } from 'react-redux';

const AnsPollItem = (props) => {
    const renderUI = () => {
        const {users, questions, authedUser, pollid} = props;
        // Calculate total number votes for selected question.
        const totalVotes = questions[pollid].optionOne.votes.length + questions[pollid].optionTwo.votes.length;
        

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