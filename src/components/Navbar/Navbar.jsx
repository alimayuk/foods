import React, { useState } from 'react';
import { getNav } from '../../data/NavMap';
import {CiSearch} from "react-icons/ci"
import {AiOutlineShoppingCart} from "react-icons/ai"

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = getNav();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderMenuItems = () => {
    return navItems.map(item => (
      <li key={item.id}>
        <a href={item.href} onClick={closeMenu}>{item.name}</a>
      </li>
    ));
  };

  return (
    <div className="navbar">
      <div className="logo"><a href="#">Foodie's</a></div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`aa menu ${menuOpen ? 'active' : ''}`}>
        {renderMenuItems()}
      </ul>
      <div className='buttons'>
      <CiSearch className='searchIcon'/>
      <AiOutlineShoppingCart className='searchIcon'/>
      <a href="#" className='LoginLink'><button className='btnOrange'>Login</button></a>
      </div>
     
    </div>
  );
}

export default HamburgerMenu;
