import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = () => {
    console.log(props);

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