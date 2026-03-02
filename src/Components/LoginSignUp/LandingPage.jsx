import React, {useState} from 'react';
import './LandingPage.css';

// import images from asset folder
// import user_icon from '../Assets/'
// img tags add user icons email icon and password


const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);

        const formData = new FormData(e.target);
        // console.log(formData.keys());
        var data = {};
        formData.forEach((value, key) => data[key] = value);
        var json = JSON.stringify(data);
        console.log(json);
    }

    //
    // const response = await fetch("https://example.org/post", {
    //     method: "POST",
    //     body: JSON.stringify({ username: "example" }),
    //     // …
    // });

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='header'>
                    <div className='text'>
                        {action}
                    </div>
                    <div className='underline'>
                    </div>
                </div>
                <div className='inputs'>
                    {action === 'Login' ? <div></div> : <div className='input'>
                            <input type='text' name='username' placeholder='Username'/>
                    </div>}
                </div>
                <div className='inputs'>
                    <div className='input'>
                            <input type='email' name='email' placeholder='Email Address'/>
                    </div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                            <input type='password' name='password' placeholder='Password'/>
                    </div>
                </div>
                {action === 'Sign Up' ? <div></div> : <div className='forgot-password'>Forgot Password?
                    <span>Reset Here</span></div>}
                {action === 'Login' ? <div></div> : <div className='existing-account'>Have An Account?
                    <span onClick={() => {
                        setAction('Login');
                        console.log("clicked");
                    }}>Login Here</span></div>}
                <div className='submit-container'>
                    {action === 'Login' ? <button></button> :
                        <button type="submit" className={action === 'Login' ? 'submit grey' : ' submit-button'} onClick={() => {
                            setAction('Sign Up')
                        }}>Submit</button>}
                    {action === 'Sign Up' ? <button></button> :
                        <button type="submit" className={action === 'Sign Up' ? 'submit grey' : 'submit'} onClick={(() => {
                            setAction('Login')
                        })}>Login</button>}

                </div>
            </form>
        </div>
    )
};

export default LoginSignUp;