import React from 'react';
import * as FaIcons from "react-icons/fa";
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link className="menu-bars" to="/" >
          <FaIcons.FaBars />
        </Link>
      </div>
    </>
  )
}

export default Navbar;

