import React from "react";
import Inner from "./inner-slider";
import OurStory from "./our-story";
import HappyHour from "./happy-hour";
import UpcomingEventsSection from "./upcoming-events-section";
import NextEventsSection from "./next-events";
import PubsPhotoGallery from "./pubs-photo-gallery";
import BlogNewsSection from "./blog&news";
import CocktailsHomeSection from "./random-cocktails";

const HomePage = (props) => (
  <>
    <Inner />
    <OurStory />
    <CocktailsHomeSection />
    <HappyHour />
    <UpcomingEventsSection />
    <NextEventsSection />
    <PubsPhotoGallery />
    <BlogNewsSection />
  </>
);

export default HomePage;
