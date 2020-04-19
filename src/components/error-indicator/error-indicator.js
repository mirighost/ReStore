import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className='jumbotron error'>
            Something went wrong... <br />
            <p>Don't worry, we are already trying to fix it!</p>
            <a className='error-button' href='/'>
                <button className='btn btn-warning btn-lg'>Homepage</button>
            </a>
        </div>
    );
};

export default ErrorIndicator;
