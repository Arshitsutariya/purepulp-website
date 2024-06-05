import React from 'react';
import './Signup.css';

export const Signup = () => {
  return (
    <div className="user_account_container">
      <h1>Create your Account</h1>
      <div className="user_info_fields">
        <input type="text" id="name" placeholder="Enter Name" />
      </div>
      <div className="user_info_fields">
        <input type="email" id="email" placeholder="Email Address" />
      </div>
      <div className="user_info_fields">
        <input type="date" id="dob" placeholder="Date of Birth" />
      </div>
      <div className="user_info_fields">
        <input type="password" id="password" placeholder="Please enter your password" />
      </div>
      <div className="user_info_fields">
        <input type="password" id="confirm_password" placeholder="Confirm password" />
      </div>
      <div className="user_info_fields">
        <input type="text" id="address" placeholder="Shipping Address" />
      </div>
      <button>Create Account</button>
      <button>Modification</button>
    </div>
  );
};
