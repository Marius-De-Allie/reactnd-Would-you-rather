import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => (
    <div>
        <h3>404. Page not found!</h3>
        <p>Return<Link to="/">Home</Link></p>
    </div>
);

export default NotfoundPage;