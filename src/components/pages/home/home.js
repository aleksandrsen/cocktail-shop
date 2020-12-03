import React from "react";
// Components
import OurStory from "./our-story";
import HappyHour from "./happy-hour";
import NextEvents from "./next-events";
import MainSlider from "./main-slider";
import BlogNewsSection from "./blog&news";
import UpcomingEvents from "./upcoming-events";
import PubsPhotoGallery from "./pubs-photo-gallery";
import CocktailsHomeSection from "./random-cocktails";

const Home = (props) => (
  <>
    <MainSlider />
    <OurStory />
    <CocktailsHomeSection />
    <HappyHour />
    <UpcomingEvents />
    <NextEvents />
    <PubsPhotoGallery />
    <BlogNewsSection />
  </>
);

export default Home;
