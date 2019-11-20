import React from 'react';
import './App.scss';
// Components
import Header from "../header"
import HomeCarousel from "../home-carousel";
import OurStory from "../our-story-section";
import HappyHour from "../happy-hour-section";
import UpcomingEvents from "../upcoming-events-section";
import PubsPhotoSection from "../pubs-photo-section";
import NextEventsSection from "../next-events-section";
import BlogNews from "../blog&news-section";

function App(props) {

    return (
        <>
            <Header/>
            <main>
                <div className="inner">
                    <HomeCarousel/>
                </div>
                <OurStory/>
                <HappyHour/>
                <UpcomingEvents/>
                <NextEventsSection/>
                <PubsPhotoSection/>
                <BlogNews/>
            </main>
        </>
    );
}

export default App;
