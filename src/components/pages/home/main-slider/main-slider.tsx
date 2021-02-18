import React from "react";
import "./main-slider.scss";
// Components
import { Carousel } from "antd";
// Utils
import slides from "../../../../src_/img/main-slider-slides";

const MainSlider = () => (
  <section className="mainSlider" data-test="mainSlider">
    <Carousel autoplay>
      {slides.map(({ name, img }) => (
        <img src={img} alt={name} key={name} />
      ))}
    </Carousel>
  </section>
);

export default MainSlider;
