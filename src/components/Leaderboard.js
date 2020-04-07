import React from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from './LeaderboardItem';

const Leaderboard = props => {
    const ui = props.authedUser === null ? <h3>Please login at the top right to continue to the homepage</h3> :
    (
        <React.Fragment>
            <h1 className="header-text">Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th><h3>UserName</h3></th>
                        <th><h3>Answered</h3></th>
                        <th><h3>Asked</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.userIds.map(id => <LeaderboardItem key={id} id={id} />)}
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );

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
    // Sort userTotals array in descending order by each element object's total property.
    userTotals = userTotals.sort((a, b) => {
        if(b.total > a.total) {
            return 1
        } else {
            return -1
        }
    }); 
    // Modify sorted array to return only user ids as strings.
    const userIds = userTotals.map(user => user.userId);
    return {
        userIds, // Array of user ids sorted in descending order by on user totals.
        authedUser
    }
};

export default connect(mapStateToProps)(Leaderboard);