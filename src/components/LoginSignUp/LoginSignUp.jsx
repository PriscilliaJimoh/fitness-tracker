import '../../global.css';
import '@components/LoginSignUp/LoginSignUp.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router';

/* eslint-disable react/prop-types */
const LoginSignUp = ({ setUser }) => {
  const [action, setAction] = useState('Sign Up');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.target);
    var data = {};
    formData.forEach((value, key) => (data[key] = value));
    console.log(JSON.stringify(data)); // del

    const endpoint = action === 'Login' ? '/login' : '/signup';

    try {
      const response = await fetch(`http://127.0.0.1:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('username', JSON.stringify(result.username));
        setUser(result.username);
        navigate('/home');
      } else {
        setError(result.message || 'Unable to login, try again');
      } // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError('Unable to connect');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === 'Login' ? (
            <div></div>
          ) : (
            <div className="input">
              <input type="text" name="username" placeholder="Username" />
            </div>
          )}
        </div>
        <div className="inputs">
          <div className="input">
            <input type="email" name="email" placeholder="Email Address" />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        {action === 'Sign Up' ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password?
            <span>Reset Here</span>
          </div>
        )}
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="existing-account">
            Have An Account?
            <span
              onClick={() => {
                setAction('Login');
                console.log('clicked');
              }}
            >
              Login Here
            </span>
          </div>
        )}
        <div className="submit-container">
          {action === 'Login' ? (
            <button type="submit" className="submit">
              Login
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Submit
            </button>
          )}
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default LoginSignUp;
