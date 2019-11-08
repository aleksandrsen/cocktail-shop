import React from 'react';
import './App.scss';
// Components
import Header from "../header"
import HomeCarousel from "../home-carousel";

function App(props) {

    return (
        <>
            <Header/>
            <main>
            <div className="inner">
                <HomeCarousel/>
            </div>
            </main>
        </>
    );
}

export default App;
