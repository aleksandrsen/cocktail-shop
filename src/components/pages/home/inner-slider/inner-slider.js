import React from "react";
import "./inner-slider.scss";
import { Carousel } from "antd";
import slides from "../../../../img/main-slider-slides";

const InnerSlider = (props) => (
  <div className="inner">
    <Carousel autoplay>
      {slides.map(({ name, img }) => {
        return (
          <div key={name}>
            <img src={img} alt="slide" />
          </div>
        );
      })}
    </Carousel>
  </div>
);

export default InnerSlider;
