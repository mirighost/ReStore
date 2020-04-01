import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return <div className="jumbotron error">Something went wrong... <br />
        <p>Don't worry, we already trying to fix it!</p>
    </div>;
};

export default ErrorIndicator;