import React from 'react';
import { connect } from 'react-redux';
import UnanPollItem from './UnaPollItem';
import AnsPollItem from './AnsPollItem';

const PollDetails = (props) => {
    const renderUI = () => {
        // Check whether user is logged in.
        if(this.props.authedUser !== null) {
            // Create an array of the currently logged in user's answer IDs.
            const authedUserAnswerIds = Object.keys(this.props.users[this.props.authedUser].answers);
            return (
                <React.Fragment>
                    {authedUserAnswerIds.includes(this.props.pollId) ? <AnsPollItem pollid={this.props.pollId}/> :
                    <UnanPollItem pollid={this.props.pollId} />}
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