import React from "react";
import Inner from "../inner-slider";
import OurStorySection from "../our-story-section";
import HappyHourSection from "../happy-hour-section";
import UpcomingEventsSection from "../upcoming-events-section";
import NextEventsSection from "../next-events-section";
import PubsPhotoGallerySection from "../pubs-photo-gallery-section";
import BlogNewsSection from "../blog&news-section";
import CocktailsHomeSection from "../random-cocktails-section";

function HomePage(props) {

    return (
        <>
            <Inner/>
            <OurStorySection/>
            <CocktailsHomeSection/>
            <HappyHourSection/>
            <UpcomingEventsSection/>
            <NextEventsSection/>
            <PubsPhotoGallerySection/>
            <BlogNewsSection/>
        </>
    )
}

export default HomePage;