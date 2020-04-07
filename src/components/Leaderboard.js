import React from 'react';

const Leaderboard = props => {

    return (
        <div className="leaderboard">
            
        </div>
    );
};

const mapStateToProps = ({users, authedUser}) => {
    // Return a new array that has an object for each user's id and their total for created and answered questions
    let userTotals = Object.keys(users).map(el => {
        return {
            userId: el,
            total: (users[el].questions.length + Object.keys(users[el].answers).length)
        }
    });


};