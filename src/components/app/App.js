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
import EventDetails from "../event-details";
import BlogDetailsPage from "../pages/blog-details-page";
import CocktailsPage from "../pages/cocktails-page";
import CocktailDetails from "../cocktail-details";

function App(props) {

    return (
        <>
            <Header/>
            <main>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/about" exact component={AboutUsPage}/>
                    <Route path="/cocktails/" exact component={CocktailsPage}/>
                    <Route path="/cocktails/:id" render={({match, location, history}) => {
                        const {id} = match.params;
                        return <CocktailDetails id={id}/>
                    }}/>

                    <Route path="/bartenders/" exact component={BartendersPage}/>
                    <Route path="/bartenders/:id" render={({match}) => {
                        const {id} = match.params;
                        return <BartenderDetails id={id}/>
                    }}/>

                    <Route path="/music-events/" exact component={MusicEventPage}/>
                    <Route path="/music-events/:id" render={({match}) => {
                        let {id} = match.params;
                        return <EventDetails eventId={id}/>
                    }}/>

                    <Route path="/blog/" exact component={BlogPage}/>
                    <Route path="/blog/:id" render={({match}) => {
                        const {id} = match.params;
                        return <BlogDetailsPage blogPostId={id}/>
                    }}/>

                    <Route path="/contact" exact component={ContactPage}/>
                </Switch>
            </main>
            <Footer/>
        </>
    );
}

export default App;