import React from 'react';
import "./About.css";
import foto from "../../media/foto.jpg"

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Let me tell you something about me</h3>
        <p>I am a curious person who enjoys constant learning and results-oriented.
          I found this in programming, the perfect way to work as a team and face new challenges in terms of code and knowledge.</p>
      </div>
      <div className='about-img'>
        <img src={foto} alt="about" />

      </div>
    </div>
  )
}

export default About