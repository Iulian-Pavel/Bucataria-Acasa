import React, { useEffect, useState } from "react";
import SliderData from "./SliderData";

import "./Slider.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    nextSlide();
  });

  const nextSlide = () => {
    setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 5000)
  };

  return (
    <div className="slider">
      { SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} width="200" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
