import React from 'react';
import "./About.css";
import foto from "../../media/foto.jpg";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact, FaAws } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiRedux, SiTypescript, SiNextdotjs, SiVite, SiTailwindcss, SiStyledcomponents, SiMui, SiGraphql, SiNodedotjs } from 'react-icons/si';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>About Me</h3>
        <p>
          I am a Frontend Developer with over 4 years of experience building modern, accessible, and scalable interfaces using React.js and Next.js. My focus is on delivering high-impact digital products, always prioritizing user experience and best development practices.<br></br>
          I have collaborated with cross-functional teams (UI/UX, backend, QA, and functional analysis), contributing to the continuous improvement of processes and features. My experience includes the creation of reusable components, API integration, and authentication solutions, working within agile environments such as Scrum and Kanban.<br></br>
          I am passionate about learning new technologies, teamwork, and delivering quality results that make a difference.
        </p>
          
        <div className="about-actions">
          <a
            href="/Valentina_Quiroga_CV_EN (1) (2).pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="about-cv-btn"
          >
            Download CV
          </a>
          <div className="about-skills">
            <span style={{fontWeight:600, fontSize:'1.1rem', marginBottom:'8px', display:'block'}}>Languages and Tools:</span>
            <div style={{display:'flex', flexWrap:'wrap', gap:'16px', alignItems:'center', fontSize:'2rem', marginTop:'8px'}}>
              <FaBootstrap title="Bootstrap" color="#7952B3" />
              <FaCss3Alt title="CSS3" color="#1572B6" />
              <FaHtml5 title="HTML5" color="#E34F26" />
              <FaJs title="JavaScript" color="#F7DF1E" />
              <SiTypescript title="TypeScript" color="#3178C6" />
              {/* <FaNodeJs title="Node.js" color="#339933" /> */}
              <SiNodedotjs title="Node.js" color="#8CC84B" style={{fontSize:'2.4rem', filter:'drop-shadow(0 1px 2px #333)'}} />
              <SiExpress title="Express" color="#000" />
              <SiPostgresql title="PostgreSQL" color="#336791" />
              <FaReact title="React" color="#61DAFB" />
              <SiRedux title="Redux" color="#764ABC" />
              <SiNextdotjs title="Next.js" color="#000" />
              <SiVite title="Vite" color="#646CFF" />
              <SiTailwindcss title="Tailwind CSS" color="#06B6D4" />
              <SiStyledcomponents title="Styled Components" color="#DB7093" />
              <SiMui title="Material UI" color="#007FFF" />
              <FaAws title="AWS" color="#FF9900" />
              <SiGraphql title="GraphQL" color="#E10098" />
            </div>
          </div>
        </div>
      </div>
      <div className='about-img'>
        <img src={foto} alt="about" style={{maxWidth:'100%', maxHeight:'340px', objectFit:'cover', borderRadius:'12px', margin:'0 auto', display:'block'}} />
      </div>
    </div>
  )
}

export default About