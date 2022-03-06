import React, { useState } from "react";
import SliderData from "./SliderData";

import "./Slider.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div className="slider">
      <button onClick={nextSlide}>next</button>
      <button onClick={prevSlide} style={{zIndex: 4}}>prev</button>
      { SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} width="200" className="image" />
            )}
            <h1>Gustul Bucatariei Italiene</h1>
            <p>La tine acasa</p>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
