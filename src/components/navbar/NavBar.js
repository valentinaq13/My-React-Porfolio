import React from 'react';
import "./NavBar.css";
import { AiFillUpCircle } from "react-icons/ai";


const NavBar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const toTheBottom = () => {
    window.scrollTo(0, document.body.scrollHeight );
  }

  if( isScrolling > 20){
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className='navbar-logo2' onClick={toTheTop}>
      <AiFillUpCircle/>
      </div>
      <div className='navbar-logo' onClick={toTheBottom}>Contact me</div>
    </nav>
  
  )
  }else{
    return (
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className='navbar-logo' onClick={toTheBottom}>Contact me</div>
    </nav>
    )
  }
}

export default NavBar