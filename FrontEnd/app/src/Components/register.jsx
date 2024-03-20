import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    console.log('Registered successfully!');
    
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className='fulllogin'>
      <div className="login">
        <div className="form">
          <div className="box">
            <div className="header">
              <img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-justicon/64/external-gift-thanksgiving-justicon-lineal-justicon.png" alt="external-gift-thanksgiving-justicon-lineal-justicon"/>
              <h1>SIGN UP</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {error && <p className="error">{error}</p>}
              <input className="signup-btn" type="submit" value="SIGNUP" />
            </form>
            <Link to="/"><p style={{textDecoration:'none'}} > Already Have an account? Login</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
