import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div>
        <div className="navlinks">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/add">Add Poll</NavLink></li>
                <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
            </ul>
        </div>
    </div>
);

export default Nav;