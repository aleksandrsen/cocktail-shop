import React from "react";
import Inner from "./main-slider";
import OurStorySection from "./our-story";
import BlogNewsSection from "./blog&news";
import HappyHourSection from "./happy-hour";
import NextEventsSection from "./next-events";
import UpcomingEvents from "./upcoming-events";
import CocktailsHomeSection from "./random-cocktails";
import PubsPhotoGallerySection from "./pubs-photo-gallery";

const Home = (props) => (
    <>
        <Inner />
        <OurStorySection />
        <CocktailsHomeSection />
        <HappyHourSection />
        <UpcomingEvents />
        <NextEventsSection />
        <PubsPhotoGallerySection />
        <BlogNewsSection />
    </>
);

export default Home;

