import React from 'react';
import './App.scss';
import store from "../../store"
import {Provider} from "react-redux"
// Components
import Header from "../header"
import HomeCarousel from "../home-carousel";
import OurStorySection from "../our-story-section";
import HappyHourSection from "../happy-hour-section";
import UpcomingEventsSection from "../upcoming-events-section";
import PubsPhotoSection from "../pubs-photo-section";
import NextEventsSection from "../next-events-section";
import BlogNewsSection from "../blog&news-section";

function App(props) {

    return (
        <Provider store={store}>
            <Header/>
            <main>
                <div className="inner">
                    <HomeCarousel/>
                </div>
                <OurStorySection/>
                <HappyHourSection/>
                <UpcomingEventsSection/>
                <NextEventsSection/>
                <PubsPhotoSection/>
                <BlogNewsSection/>
            </main>
        </Provider>
    );
}

export default App;
