import React from 'react';
import { connect } from 'react-redux';

const LeaderboardItem = props => {
    return (
        <tbody>
            <tr>
                <td>
                    <h4 className="ui image header">
                        <img 
                            className="ui avatar image" 
                            src={'/' + props.users[props.id].avatarURL} 
                            alt={`${props.users[props.id].name}'s avatar`}
                        />
                        <div className="content">
                            {props.users[props.id].name}
                        </div>
                    </h4>
                </td>
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