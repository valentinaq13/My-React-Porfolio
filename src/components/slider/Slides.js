import React from "react";
import "./Slider.css";
import dresses from "../../media/dresses.png";
import rame from "../../media/rame.png";

const slidesInfo = [
    {
        src: dresses,
        alt: "Dresses E-commerce",
        desc: "Dresses E-commerce",
        href: "https://dresses-proyect.vercel.app/"
    },
    {
        src: rame,
        alt: "Rame E-commerce",
        desc: "Rame E-commerce",
        href: "https://rame-app.vercel.app/"
    },
    {
        src: null,
        alt: "Próximamente",
        desc: "Próximamente",
        href: null
    },
];

const slides = slidesInfo.map((slide, idx) => {
    if (slide.href) {
        return (
            <div
                className="slide-container"
                key={slide.href + idx}
                style={{ cursor: 'pointer' }}
                onClick={() => window.open(slide.href, '_blank', 'noreferrer')}
            >
                <img src={slide.src} alt={slide.alt} />
                <div className="slide-desc">
                    <span>{slide.desc}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="slide-container"
                key={'placeholder' + idx}
                style={{ background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="slide-desc" style={{ background: 'transparent', position: 'static', width: '100%', textAlign: 'center' }}>
                    <span style={{ color: 'white', fontSize: 24, fontWeight: 700, padding: 0 }}>Próximamente</span>
                </div>
            </div>
        );
    }
});

export default slides;