import React, {useState} from 'react';
import {menuItems} from './Menu-Items';
import {Link} from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul className={click ? "dropdown-menu clicked" : "dropdown-menu"} onClick={handleClick}>
        {menuItems.map((e, i) => {
          return (
            <li key={i}>
              <Link className={e.clasSName} to={e.path} onClick={setClick(false)}>
                {i.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown;
