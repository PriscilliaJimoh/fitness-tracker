import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router';
import '../../global.css';
import './NavBar.css';
import fitnessLogo from '../Assets/fitness_logo.png';

const NavBar = () => {
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate();
    return (
        <nav className='navbar'>
            <div className='nav-items'>
                <img className='nav-logo' src={fitnessLogo} alt='fitness logo'/>
                <span className='app-name'>VigoraPulse</span>
                <div className="nav-links">
                    <Link className='nav-text' to='/about'>About</Link>
                    <Link className='nav-text' to='/help'>Help</Link>
                </div>
            </div>

            <div className='dropdown'>
                <button className='dropdown-btn'>☰</button>
                <div className='dropdown-content'>
                    <Link to='/account'>Account</Link>
                    <Link to='/contact'>Contact Us</Link>
                    {auth === true ? <div className='logout-container'>
                        <div className='logout-items'>
                            <br/>
                            <h3 className='account-id'>Account ID: xxxx</h3>
                            <button className='logout-btn' onClick={() => {
                                navigate('/logout');
                                setAuth(false)
                            }}>
                                Logout
                            </button>
                        </div>
                    </div> : <div></div>
                    }
                </div>
            </div>
        </nav>
    );
}

export default NavBar;