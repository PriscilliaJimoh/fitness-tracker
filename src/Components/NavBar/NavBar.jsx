import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import "../../global.css";
import "./NavBar.css";
import fitnessLogo from "../Assets/fitness_logo.png";

const NavBar = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("username");
    return saved ? JSON.parse(saved) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const saved = localStorage.getItem("username");
      setUser(saved ? JSON.parse(saved) : null);
    };

    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUser(null);
    window.dispatchEvent( new Event("storage"));
    navigate("/logout");
  };

  return (
    <nav className="navbar">
      <div className="nav-items">
        <img className="nav-logo" src={fitnessLogo} alt="fitness logo" />
        <span className="app-name">VigoraPulse</span>
        <div className="nav-links">
          <Link className="nav-text" to="/about">
            About
          </Link>
          <Link className="nav-text" to="/contact">
            Help
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropdown-btn">☰</button>
        <div className="dropdown-content">
          <Link to="/account">Account</Link>
          <Link to="/contact">Contact Us</Link>
          {user ? (
            <div className="logout-container">
              <div className="logout-items">
                <br />
                <h3 className="account-id">Account ID: {user}</h3>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;