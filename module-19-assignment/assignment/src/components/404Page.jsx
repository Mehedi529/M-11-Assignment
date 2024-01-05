import React from 'react';
import { Link } from 'react-router-dom';

const 404Page = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for might be unavailable or does not exist.</p>
      <p>Let's go back to <Link to="/">home</Link>.</p>
        </div>
    );
};

export default 404Page;