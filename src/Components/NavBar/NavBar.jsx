import React from 'react';
import './NavBar.css';
import fitnessLogo from '../Assets/fitness_logo.png';

const NavBar = () => {

    return (
        <nav className='navbar'>
            <img src ={fitnessLogo} alt='fitness logo' />
            <span className='app-name'>VigoraPulse</span>
            <div className="nav-links">
                <a className='nav-text' href=''>About</a>
                <a className='nav-text' href=''>Help</a>
            </div>
        </nav>
    )
}

export default NavBar