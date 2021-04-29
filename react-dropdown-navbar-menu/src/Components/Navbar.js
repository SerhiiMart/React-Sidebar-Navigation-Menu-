import React, {useState} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services<i className="fas fa-catet-down"/></Link> {dropdown && <Dropdown/>} 
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>Contact Us<i className="fas fa-catet-down"/></Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up<i className="fas fa-catet-down"/></Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  )
}

export default Navbar;
