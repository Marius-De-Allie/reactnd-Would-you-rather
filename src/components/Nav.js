import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserSelector from './UserSelector';
import { setAuthedUser } from '../actions/authedUser';
// Import component stylesheet.
import '../styles/components/nav.css';

const Nav = props => {
    const onLogoutClick = () => {
        // Dispatch action creator to set authedUser redux store state to value of null.
        props.dispatch(setAuthedUser(null));
        // Redirect to homepage on logout.
        props.history.push('/');
    };

    const renderLogin = () => {
        if(props.authedUser === null) {
            return <UserSelector />;
        } else {
            return (
                <React.Fragment>
                    <div className="user-info">
                        <img 
                            className="ui avatar image" 
                            src={'/' + props.users[props.authedUser].avatarURL}
                            alt={`${props.users[props.authedUser].name}'s avata`} 
                        />
                        <span>{props.users[props.authedUser].name}</span>
                        <button className="ui tiny button" onClick={onLogoutClick}>Logout</button>
                    </div>
                </React.Fragment>
            );
        }
    };

    return (
        <div className="ui container" id="nav-container">
            <div className="ui secondary pointing menu">
                <NavLink className="blue item" to="/" exact activeClassName="active">Home</NavLink>
                <NavLink className="blue item" to="/add" activeClassName="active">Add Poll</NavLink>
                <NavLink className="blue item" to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
                <div className="right menu">
                    {renderLogin()}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({authedUser, users}) => ({
    authedUser,
    users
});

export default withRouter(connect(mapStateToProps)(Nav));