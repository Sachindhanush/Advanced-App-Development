import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-info">
          <p><strong>Name:</strong> Sachin</p>
          <p><strong>Email:</strong> sachin@gmail.com</p>
          <p><strong>Role:</strong> User</p>
          <p><strong>Joined:</strong> March 19, 2022</p>
        </div>
        <div className="profile-picture">
          <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};


export default Profile;
