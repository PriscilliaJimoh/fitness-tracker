import React from 'react';
import '../../global.css';
import './Logout.css';
const Logout = () => {
    return (
        <div className='logged-out-container'>
            <h1 className="blink">Goodbye!</h1>
            <h2 className="exit-text">You have been logged out</h2>
        </div>
    );
}

export default Logout;