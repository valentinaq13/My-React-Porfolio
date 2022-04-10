import React from "react";
import "./Slider.css";
import jseeker from "../../media/jseeker.png";
import portfolio from "../../media/portfolio.png";
import countries from "../../media/countries.png";
import countriesVideo from "../../media/countriesVideo.mp4"

const slidesInfo = [
    {
        src: countries,
        alt: "Project 1",
        desc: "Countries",
        href: "https://github.com/valentinaq13/PI-Countries"
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
        href: "https://github.com/valentinaq13/My-React-Porfolio"
    },
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