import React from "react";
import "./main-slider.scss";
import { Carousel } from "antd";
import slides from "../../../../src_/img/main-slider-slides";

const MainSlider = (props) => (
  <section className="mainSlider">
    <Carousel autoplay>
      {slides.map(({ name, img }) => (
        <img src={img} alt={name} />
      ))}
    </Carousel>
  </section>
);

export default MainSlider;
