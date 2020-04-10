import React from 'react';
import { connect } from 'react-redux';
import NotfoundPage from './NotfoundPage';
import '../styles/components/ansPollItem.css';

const AnsPollItem = (props) => {
    const renderUI = () => {
        const {users, questions, authedUser, pollid} = props;
        // Calculate total number votes for selected question.
        const totalVotes = questions[pollid].optionOne.votes.length + questions[pollid].optionTwo.votes.length;
        // Calculate number votes for selected poll's 1st option.
        const optionOneVotes = questions[pollid].optionOne.votes.length;
        // Calculate number votes for selected poll's 2nd option.
        const optionTwoVotes = questions[pollid].optionTwo.votes.length;
        // Conditionally render poll details UI.
        if(questions[pollid] === undefined) {
            return <NotfoundPage />
        } else {
            return (
                <React.Fragment>
                    <h1 className="ui header" id="results-header">Poll Results</h1>
                    <div className="ui centered card">
                        <div className="content" id="avatar">
                            <img 
                                className="ui avatar image" 
                                src={props.users[props.questions[props.pollid].author].avatarURL} 
                            />
                            {users[questions[pollid].author].name} asked:
                        </div>
                        <div className="content">
                            <h2 className="ui header">Would you Rather</h2>
                            <div className="description">
                                {questions[pollid].optionOne.votes.includes(authedUser) && <div className="ui pointing below red basic label">Your selection</div>}
                                <p>{questions[pollid].optionOne.text} </p>
                                
                            </div>
                            <div className="label-container">
                                <div style={{marginTop: ".5rem", marginBottom: "1rem"}} class="ui blue label">
                                    <p style={{textAlign: "right"}}>{questions[pollid].optionOne.votes.length} {optionOneVotes !== 1 ? 'votes ' : 'vote '}  |
                                    {` ${Math.round(optionOneVotes / totalVotes * 100)} %`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="description">
                                {questions[pollid].optionTwo.votes.includes(authedUser) && <div className="ui pointing below red basic label"> your selection</div>}
                                <p>{questions[pollid].optionTwo.text} </p>
                                
                            </div>
                            <div className="label-container">
                                <div style={{marginTop: ".5rem", marginBottom: "1rem"}} className="ui blue label">
                                    <p style={{textAlign: "right"}}>{questions[pollid].optionTwo.votes.length} {optionTwoVotes !== 1 ? 'votes ' : 'vote '}  | 
                                    {` ${Math.round(optionTwoVotes / totalVotes * 100)} %`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    };
    return (
        <div className="ui container" style={{marginTop: "2rem"}}>
            {renderUI()}
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

