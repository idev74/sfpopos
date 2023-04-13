import React, { useState } from 'react';
import './Account.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <label>
        Email:  
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:  
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Confirm Password:  
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>
      <button type="submit" onClick={() => window.location.href="/"}>Sign Up</button>
      <p>Already have an account? <a href="/#/login">Log in here!</a></p>
    </form>
  );
};

export default SignUpForm;
