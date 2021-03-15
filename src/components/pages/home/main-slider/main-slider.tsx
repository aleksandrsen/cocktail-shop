import React from "react";
import "./main-slider.scss";
// Components
import Slider, { Settings } from "react-slick";
import ImgSkeleton from "../../../reusable-components/img-skeleton";
// Utils
import slides from "../../../../src_/img/main-slider-slides";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings: Settings = {
    dots: true,
    lazyLoad: "progressive",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  return (
    <section className="mainSlider" data-test="mainSlider">
      <Slider {...settings}>
        {slides.map(({ name, img }) => (
          <ImgSkeleton
            key={name}
            src={img}
            skeletonStyle={{ height: "100vh", width: "100vw" }}
          />
        ))}
      </Slider>
    </section>
  );
};

export default MainSlider;
