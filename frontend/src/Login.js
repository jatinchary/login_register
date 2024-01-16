
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [Email_ID, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        Email_ID: Email_ID,  // Assuming you use 'username' as the field name
        Password: password,
      });

      console.log(response.data); // Handle the response accordingly, e.g., set user state, redirect, etc.
    } catch (error) {
      console.error('Error during login:', error.response.data);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="Tab">
      <h2>Login</h2>
      <div className="input-container">
        <label className="input-label">
          Username:
          <input
            className="input-field"
            type="text"
            name='Email_ID'
            value={Email_ID}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="input-label">
          Password:
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="input-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
