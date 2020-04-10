import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => (
    <div>
        <h3>404 Page not found!</h3>
        <Link className="ui blue button" to="/">Return Home</Link>
    </div>
);

export default NotfoundPage;