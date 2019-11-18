import React from 'react';
import './App.scss';
// Components
import Header from "../header"
import HomeCarousel from "../home-carousel";
import OurStory from "../our-story";
import HappyHour from "../happy-hour";
import UpcomingEvents from "../upcoming-events";

function App(props) {

    return (
        <>
            <Header/>
            <main>
            <div className="inner">
                <HomeCarousel/>
                <OurStory/>
                <HappyHour/>
                <UpcomingEvents/>
            </div>
            </main>
        </>
    );
}

export default App;
