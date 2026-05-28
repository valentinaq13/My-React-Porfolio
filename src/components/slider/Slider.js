import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>

      <Carousel
        autoPlay={false}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={33.33}
        dynamicHeight={false}
        swipeable={true}
        emulateTouch={true}
        renderIndicator={false}
        responsive={true}
      >
        {Slides}
      </Carousel>
    </div>
  );
};

export default Slider;