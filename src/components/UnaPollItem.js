import React from 'react';
import { connect } from 'react-redux';
import NotfoundPage from './NotfoundPage';

const UnaPollItem = (props) => {

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

export default connect(mapStateToProps)(UnaPollItem);