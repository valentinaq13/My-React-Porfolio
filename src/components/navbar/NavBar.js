import React from 'react';
import "./NavBar.css";


const NavBar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className='navbar-logo' onClick={toTheTop}>Hi ! I am</div>

    </nav>
  )
}

export default NavBar