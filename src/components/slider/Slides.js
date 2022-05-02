import React from "react";
import "./Slider.css";
import jseeker from "../../media/jseeker.png";
import portfolio from "../../media/portfolio.png";
import countries from "../../media/countries.png";
import CRUD from "../../media/CRUD.png"

const slidesInfo = [
    {
        src: countries,
        alt: "Project 1",
        desc: "Countries",
        href: "https://www.linkedin.com/posts/valentina-quiroga-zalazar_frontend-react-database-activity-6892512726267035648-W3UL?utm_source=linkedin_share&utm_medium=member_desktop_web"
    },
    {
        src: jseeker,
        alt: "Project 2",
        desc: "SeekerPro",
        href: "https://pf-seekerpro.herokuapp.com/"
    },
    {
        src: portfolio,
        alt: "Project 3",
        desc: "React Portfolio",
        href: "https://valentina-quiroga.vercel.app/"
    },
    {
        src: CRUD ,
        alt: "Project 4",
        desc: "Firebase & React CRUD",
        href: "https://fir-react-crud-6ac76.web.app/"
    }
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <a href={slide.href} target="_blank" rel="noreferrer">
            <img src={slide.src} alt={slide.alt} />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;