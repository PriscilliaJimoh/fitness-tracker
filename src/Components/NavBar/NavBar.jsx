import React, {useState} from 'react';
import './NavBar.css';
import fitnessLogo from '../Assets/fitness_logo.png';

const NavBar = () => {
    const [auth, setAuth] = useState(false)
    return (
        <nav className='navbar'>
            <div className='nav-items'>
                <img className='app-logo' src={fitnessLogo} alt='fitness logo'/>
                <span className='app-name'>VigoraPulse</span>
                <div className="nav-links">
                    <a className='nav-text' href=''>About</a>
                    <a className='nav-text' href=''>Help</a>
                </div>
            </div>

            <div className='dropdown'>
                <button className='dropdown-btn'>☰</button>
                <div className='dropdown-content'>
                    <a href=''>Account</a>
                    <a href=''>Contact Us</a>
                    {auth === true ? <div className='logout-container'>
                        <div className='logout-items'>
                            <br/>
                            <h3 className='account-id'>Account ID: xxxx</h3>
                            <button className='logout-btn' onClick={() => {setAuth(false)}}>
                                Logout
                            </button>
                        </div>
                    </div> : <div></div>
                    }
                </div>
            </div>
        </nav>
    )
};

export default NavBar;