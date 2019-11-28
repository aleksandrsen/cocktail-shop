import React from "react";
import Inner from "../inner";
import OurStorySection from "../our-story-section";
import HappyHourSection from "../happy-hour-section";
import UpcomingEventsSection from "../upcoming-events-section";
import NextEventsSection from "../next-events-section";
import PubsPhotoSection from "../pubs-photo-section";
import BlogNewsSection from "../blog&news-section";

function HomePage(props) {

    return (
        <>
            <Inner/>
            <OurStorySection/>
            <HappyHourSection/>
            <UpcomingEventsSection/>
            <NextEventsSection/>
            <PubsPhotoSection/>
            <BlogNewsSection/>
        </>
    )
}

export default HomePage;