import React from "react";
import "./main-slider.scss";
// Components
import Slider, { Settings } from "react-slick";
// Utils
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import slides from "../../../../src_/img/main-slider-slides";


const MainSlider = () => {
  const settings: Settings = {
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  return (
    <section className="mainSlider" data-test="mainSlider">
      <Slider {...settings}>
        {slides.map(({ name, img }) => (
          <img src={img} alt={name} key={name} />
        ))}
      </Slider>
    </section>
  );
};

export default MainSlider;
