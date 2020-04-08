import React from 'react';
import { connect } from 'react-redux';

const LeaderboardItem = () => {
    return (
        <tbody>
            <tr>
                <td>name</td>
                <td>answered</td>
                <td>asked</td>
            </tr>
        </tbody>
    );
};

const mapStateToProp = ({users}, {id}) => ({
    users
});

export default connect(mapStateToProp)(LeaderboardItem);