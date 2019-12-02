import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom"
// Components
import Header from "../header"
import Footer from "../footer";
import BartenderDetails from "../bartender-details";
// Pages
import HomePage from "../pages/home-page";
import AboutUsPage from "../pages/about-us-page";
import ContactPage from "../pages/contact-page";
import BartendersPage from "../pages/bartenders-page";
import BlogPage from "../pages/blog-page";
import MusicEventPage from "../pages/music-event-page";
import BlogDetails from "../blog-details";

function App(props) {

    return (
        <>
            <Header/>
            <main>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/about" component={AboutUsPage}/>
                    <Route path="/bartenders" exact component={BartendersPage}/>
                    <Route path="/bartenders/:id" render={({match, location, history}) => {
                        console.log(match, location, history);
                        const {id} = match.params;
                        return <BartenderDetails bartenderId={id}/>
                    }}/>
                    <Route path="/music-event" component={MusicEventPage}/>
                    <Route path="/blog" exact component={BlogPage}/>
                    <Route path="/blog/:id" render={({match, location, history}) => {
                        return <BlogDetails/>
                    }}/>
                    <Route path="/contact" component={ContactPage}/>
                </Switch>
            </main>
            <Footer/>
        </>
    );
}

export default App;