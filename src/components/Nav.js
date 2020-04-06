import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserSelector from './UserSelector';
import { setAuthedUser } from '../actions/authedUser';

const Nav = props => {
    console.log(props);

    const onLogoutClick = () => {
        // Dispatch action creator to set authedUser redux store state to value of null.
        props.dispatch(setAuthedUser());
        // Redirect to homepage on logout.
        prop.history.push('/');
    };

    const renderLogin = () => {
        if(props.authedUser === null) {
            return <UserSelector />;
        } else {
            return (
                <React.Fragment>
                    <div className="user-info">
                        <div>User Avatar goes here</div>
                        <span>{props.users[props.authedUser].name}</span>
                        <button onClick={onLogoutClick}>Logout</button>
                    </div>
                </React.Fragment>
            );
        }
    };

    return (
        <div>
            <div className="navlinks">
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/add">Add Poll</NavLink></li>
                    <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                </ul>
            </div>
            <div className="user-auth">
        
            </div>
        </div>
    );
};

const mapStateToProps = ({authedUser, users}) => ({
    authedUser,
    users
});

export default connect(mapStateToProps)(Nav);