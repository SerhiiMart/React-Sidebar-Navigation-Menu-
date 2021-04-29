import React, {useState} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="navbar-logo">
          Logo
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
