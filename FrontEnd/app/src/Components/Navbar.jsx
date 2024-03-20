import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {<img src="https://asset.brandfetch.io/idHx7ZZZxE/idzzh0l_ji.png" alt="Logo" width="40%" height="40%" className="logo" />}
        <span>Gift Craft</span>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <Link to="/home"><span className="nav-item">Home</span></Link>
        <Link to="/data"> <span className="nav-item">My Orders</span></Link>
        <Link to="/cart">  <span className="nav-item">Cart</span></Link>
        <Link to="/Profile"> <span className="nav-item">Profile</span></Link>
        <Link to="/">   <span className="nav-item">Logout</span></Link>
      </div>
    </div>
  );
}
