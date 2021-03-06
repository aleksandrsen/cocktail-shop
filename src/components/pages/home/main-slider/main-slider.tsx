import React from "react";
import styles from "./main-slider.module.scss";
// Components
import Slider, { Settings } from "react-slick";
import ImgSkeleton from "../../../reusable-components/img-skeleton";
// Utils
import slides from "../../../../source/img/main-slider-slides";

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
    <section className={styles.mainSlider} data-test="mainSlider">
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
