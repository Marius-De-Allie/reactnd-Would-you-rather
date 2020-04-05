import React from 'react';
import { connect } from 'react-redux';

const AnsPollItem = (props) => {
    const renderUI = () => {
        

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