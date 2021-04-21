import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as VscIcons from "react-icons/vsc";
import './Navbar.css';
import {Link} from 'react-router-dom';
import { SideBarD } from './SidebarD';
import {IconContext} from "react-icons";




function Navbar() {
  const [sidebar, setSidebar ] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);  
  return (
    <>
    {/* IconContext.Provider allows adding styles for all icons */}
      <IconContext.Provider value={{color: "yellow"}}>
        <div className="navbar">
          <Link className="hamburger" to="#" >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar} className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="hamburger">
                <VscIcons.VscChromeClose />
              </Link>
            </li>
            {SideBarD.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon} <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul> 
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;

