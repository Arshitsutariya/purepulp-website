import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="heading">PurePulp</div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/cart"> Cart </Link>
            <Link to="/login">Login </Link>
        </div>
    </div>
  )
}