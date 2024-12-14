import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='container'>
        <header className='header'>
          <Link to='/'>
            <span></span>
          </Link>
          <nav className='navbar'>
            <NavLink to='/works'>Works</NavLink>
            <NavLink to='/about'>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
