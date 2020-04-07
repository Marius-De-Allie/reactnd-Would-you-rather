import React from 'react';
import { connect } from 'react-redux';
import UnanPollItem from './UnaPollItem';
import AnsPollItem from './AnsPollItem';

const PollDetails = (props) => {
    const renderUI = () => {
        // Check whether user is logged in.
        if(props.authedUser !== null) {
            // Create an array of the currently logged in user's answer IDs.
            const authedUserAnswerIds = Object.keys(props.users[props.authedUser].answers);
            return (
                <React.Fragment>
                    {authedUserAnswerIds.includes(props.pollId) ? <AnsPollItem pollid={props.pollId}/> :
                    <UnanPollItem pollid={props.pollId} />}
                </React.Fragment>
            );
        } else {
            return <h3>Please login at the top right to view poll details</h3>
        }
    };
    return (
        <div>
            {renderUI()}
        </div>
    );
};

const mapStateToProps = ({users, authedUser}, ownProps) => ({
    users,
    authedUser,
    pollId: ownProps.match.params.question_id
});

export default connect(mapStateToProps)(PollDetails);