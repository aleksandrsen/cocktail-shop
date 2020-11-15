import React from "react";
import MainSlider from "./main-slider";
import OurStory from "./our-story";
import BlogNewsSection from "./blog&news";
import HappyHour from "./happy-hour";
import NextEvents from "./next-events";
import UpcomingEvents from "./upcoming-events";
import CocktailsHomeSection from "./random-cocktails";
import PubsPhotoGallery from "./pubs-photo-gallery";

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

