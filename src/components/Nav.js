import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div>
        <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li>Unanswered</li>
            <li>Answered</li>
            <li>Leaderboard</li>
        </ul>
    </div>
);

export default Nav;