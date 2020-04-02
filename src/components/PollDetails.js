import React from 'react';
import { connect } from 'react-redux';

const PollDetails = (props) => {
    
    return (
        <div>
            
        </div>
    );
};

const mapStateToProps = ({users, authedUser}, ownProps) => ({
    users,
    authedUser,
    pollId: ownProps.match.params.question_id
});

export default PollDetails;