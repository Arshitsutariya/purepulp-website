import React from 'react'
import { Link } from "react-router-dom";
import './Login.css';

export const Login = () => {
  return (
    <div className='Form'>
      <h1>Login</h1>
      <form >
        <div className="input-field">
          <input type="text" id="name" placeholder="Enter Your UserName" />
        </div>
        <div className="input-field">
          <input type="password" id="password" placeholder="Enter Your Password" />
        </div>

        <button onclick="">Login</button>
      </form>
      <div className="signup">
        <p>Don't have Account?<span className='singupLink'><Link to="/signup">SignUp </Link></span></p>
      </div>
    </div>
  )
}