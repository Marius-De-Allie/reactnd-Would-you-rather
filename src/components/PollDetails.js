import React from 'react';

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