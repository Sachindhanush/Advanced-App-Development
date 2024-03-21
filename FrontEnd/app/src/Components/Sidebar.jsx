import React, { useState } from 'react';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>
    
    <div className="sidebar">
      <div className="user-info">
        <div className="user-details">
        <img src='https://www.billboard.com/wp-content/uploads/2022/12/christmas-holiday-gifts-2022-billboard-1548.jpg' height='60px' width='70px' style={{borderRadius:'50%',marginBottom:'20px'}} alt='profile-img'/>
          <h5><b>Admin</b></h5>
          <p>Email Address</p>
          <div className="line"></div>
        </div>
      </div>
      <ul className="sidebar-menu">
        <Link to="/data"> <li>Dashboard</li></Link>
       <Link to="/profile"> <li>Account</li></Link>
       <Link to="/data"> <li> User Management</li></Link>
        <Link to="/"><li>Logout</li></Link>
      </ul>
      </div>
      </div>
     
    
  );
};

export default Sidebar;