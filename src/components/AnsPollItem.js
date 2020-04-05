import React from 'react';
import { connect } from 'react-redux';

const AnsPollItem = (props) => {
    
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

export default AnsPollItem;