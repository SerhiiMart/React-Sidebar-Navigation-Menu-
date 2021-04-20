import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as VscIcons from "react-icons/vsc";
import './Navbar.css';
import {Link} from 'react-router-dom';



function Navbar() {
  const [sidebar, setSidebar ] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);  
  return (
    <>
      <div className="navbar">
        <Link className="menu-bars" to="/" >
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <VscIcons.VscChromeClose />
            </Link>
          </li>
        </ul> 
      </nav>
    </>
  )
}

export default Navbar;

