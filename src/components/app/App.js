import React from 'react';
import './App.scss';
// Components
import Header from "../header"
import HomeCarousel from "../home-carousel";
import OurStory from "../our-story";

function App(props) {

    return (
        <>
            <Header/>
            <main>
            <div className="inner">
                <HomeCarousel/>
                <OurStory/>
            </div>
            </main>
        </>
    );
}

export default App;
