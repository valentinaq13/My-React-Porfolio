import React from 'react';
import "./NavBar.css";


const NavBar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo(0, document.body.scrollHeight );
  }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className='navbar-logo' onClick={toTheTop}>Contact</div>

    </nav>
  )
}

export default NavBar