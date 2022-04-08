import React from 'react';
import "./NavBar.css";


const NavBar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const toTheBottom = () => {
    window.scrollTo(0, document.body.scrollHeight );
  }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className='navbar-logo' onClick={toTheTop}>VQ</div>
      <div className='navbar-logo' onClick={toTheBottom}>Contact me</div>

    </nav>
  )
}

export default NavBar