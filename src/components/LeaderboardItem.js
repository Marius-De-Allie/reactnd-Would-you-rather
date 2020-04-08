import React from 'react';
import { connect } from 'react-redux';

const LeaderboardItem = props => {
    return (
        <tbody>
            <tr>
                <td>{props.users[props.id].name}</td>
                <td>{Object.keys(props.users[props.id].answers).length}</td>
                <td>{props.users[props.id].questions.length}</td>
            </tr>
        </tbody>
    );
};

const mapStateToProp = ({users}, {id}) => ({
    users,
    id
});

export default connect(mapStateToProp)(LeaderboardItem);