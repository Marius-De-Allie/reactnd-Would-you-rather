import React from 'react';
import { connect } from 'react-redux';

const LeaderboardItem = props => {
    return (
        <tbody>
            <tr>
                <td>
                    <h4 className="ui image header">
                        <img className="ui avatar image" src={props.users[props.id].avatarURL} />
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

// <td>
//         <h4 class="ui image header">
//           <img src="/images/avatar2/small/lena.png" class="ui mini rounded image">
//           <div class="content">
//             Lena
//             <div class="sub header">Human Resources
//           </div>
//         </div>
//       </h4></td>