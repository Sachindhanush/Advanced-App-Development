import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        { <img src="" alt="Logo" className="logo" /> }
        <span>The Gift studio</span>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
         
        </div>
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
}
