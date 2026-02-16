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
                    <form>
                        <input type='text' placeholder='Username'/>
                    </form>
                </div>}
            </div>
            <div className='inputs'>
                <div className='input'>
                    <form>
                        <input type='email' placeholder='Email Address'/>
                    </form>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <form>
                        <input type='password' placeholder='Password'/>
                    </form>
                </div>
            </div>
            {action==='Sign Up'?<div></div>:<div className='forgot-password'>Forgot Password?
                <span>Reset Here</span></div>}
            {action==='Login'?<div></div>:<div className='existing-account'>Have An Account?
                <span onClick={() => {setAction('Login'); console.log("clicked");}} >Login Here</span></div>}
            <div className='submit-container'>
                {action==='Login'?<div></div>: <div className={action==='Login'?'submit grey':'submit-button'} onClick={()=> {setAction('Sign Up')}}>Submit</div>}
                {action==='Sign Up'?<div></div>:<div className={action==='Sign Up'?'submit grey':'submit'} onClick={(()=>{setAction('Login')})}>Login</div>}

            </div>
        </div>
    )
};

export default LoginSignUp;