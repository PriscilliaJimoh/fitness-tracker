import React from 'react';
import './LandingPage.css';

// import images from asset folder
// import user_icon from '../Assets/'
// img tags add user icons email icon and password

const LoginSignUp = () => {

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                   Sign Up?
                </div>
                <div className='underline'>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    {/* <img  src ='' alt=''/> */}
                    <input type="text"/>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    {/* <img  src ='' alt=''/> */}
                    <input type='email'/>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    {/* <img  src ='' alt=''/> */}
                    <input type='password'/>
                </div>
            </div>
            <div className='forgot-password'><span>Forgot Password?</span></div>
            <div className='submit-container'>
                <div className='submit'>Sign Up</div>
                <div className='submit'>Login</div>
            </div>
        </div>
    )
}

export default LoginSignUp