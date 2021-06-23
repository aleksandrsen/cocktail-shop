import React from "react";
import "../../../source/slick-slider.scss";
// Components
import OurStory from "./our-story";
import HappyHour from "./happy-hour";
import NextEvents from "./next-events";
import MainSlider from "./main-slider";
import BlogNews from "./blog&news";
import UpcomingEvents from "./upcoming-events";
import PubsPhotoGallery from "./pubs-photo-gallery";
import CocktailsHomeSection from "./random-cocktails";

const Home = () => (
  <>
    <MainSlider />
    <OurStory />
    <CocktailsHomeSection />
    <HappyHour />
    <UpcomingEvents />
    <NextEvents />
    <PubsPhotoGallery />
    <BlogNews />
  </>
);

export default Home;
