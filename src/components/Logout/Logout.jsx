import '../../global.css';
import '@components/Logout/Logout.css';

import React from 'react';
const Logout = () => {
  return (
    <div className="logged-out-container">
      <h1 className="blink">Goodbye!</h1>
      <h2 className="exit-text">You have been logged out</h2>
    </div>
  );
};

export default Logout;
