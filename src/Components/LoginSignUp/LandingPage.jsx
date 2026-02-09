import React, {useState} from 'react';
import './LandingPage.css';

// import images from asset folder
// import user_icon from '../Assets/'
// img tags add user icons email icon and password

const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
                <div className='underline'>
                </div>
            </div>
            <div className='inputs'>
                {action==='Login'?<div></div>:<div className='input'>
                    {/* <img  src ='' alt=''/> */}
                    <input type='text' placeholder='Name'/>
                </div>}
            </div>
            <div className='inputs'>
                <div className='input'>
                    {/* <img  src ='' alt=''/> */}
                    <input type='email' placeholder='Email Address'/>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    {/* <img  src ='' alt=''/> */}
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            {action==='Sign Up'?<div></div>:<div className='forgot-password'>Forgot Password?
                <span>Reset Here</span></div>}
            <div className='submit-container'>
                <div className={action==='Login'?'submit grey':'submit'} onClick={()=> {setAction('Sign Up')}}>Sign Up</div>
                <div className={action==='Sign Up'?'submit grey':'submit'} onClick={(()=>{setAction('Login')})}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignUp