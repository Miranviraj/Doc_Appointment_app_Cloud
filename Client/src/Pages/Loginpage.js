// src/pages/LoginPage.js
import React from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const LoginPage = () => {
  return (
    <div className="container login-page">
      <div className="form-container">
        <Login />
      </div>
      <div className="form-container">
        <Signup />
      </div>
    </div>
  );
};

export default LoginPage;