import React, {useState} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="navbar-logo">
          Logo
        </Link>
      </nav>
    </>
  )
}

export default Navbar;
