import React from 'react';
import { connect } from 'react-redux';

const LeaderboardItem = () => {
    return (
        <React.Fragment>
            <td>name</td>
            <td>answered</td>
            <td>asked</td>
        </React.Fragment>
    );
};

const mapStateToProp = ({users}) => ({
    users
});

export default connect(mapStateToProp)(LeaderboardItem);