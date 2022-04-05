import React from 'react';
import "./About.css";
import foto from "../../media/foto.jpg";
import skills from "../../media/skills.png";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Let me tell you something about me</h3>
        <p>I am a curious person who enjoys constant learning and results-oriented.
          I found this in programming, the perfect way to work as a team and face new challenges daily. <br></br>
          Organization in a project seems to me to be a basic aspect to be able to set clear objectives and delivery times, for which teamwork must always be present.</p>
          
         <img src={skills} alt="skills"/>
      </div>
      <div className='about-img'>
        <img src={foto} alt="about" />

      </div>
    </div>
  )
}

export default About