import React from "react";
import "./App.scss";
import "../../src_/var.scss";
import "../../src_/grid.scss";
import "../../src_/common.scss";
import { Route, Switch } from "react-router-dom";
// Components
import Header from "../header";
import Footer from "../footer";
import BartenderDetails from "../pages/bartender-details";
// Pages
// import BlogDetails from "../pages/blog-details/blog-details";
import Cocktails from "../pages/cocktails";

import BlogDetails from "../pages/blog-details/blog-details";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contacts from "../pages/contact/contact-page";
// import Bartenders from "../pages/bartenders-section/bartenders-section";
import BlogPage from "../pages/blog/blog-page";
// import MusicEvents from "../pages/music&events/music-event-page";
// import EventDetails from "../pages/music&events/event-details";
import CocktailsPage from "../pages/cocktails/cocktails-page";
import MusicEvents from "../pages/music-events/music-events";

import CocktailDetails from "../pages/cocktails/cocktail-details";
import Bartenders from "../pages/bartenders";

import { routes } from "../../routes";
import EventDetails from "../pages/event-details";

const App = (props) => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path={routes.home.link} exact component={Home} />
        <Route path={routes.about.link} exact component={About} />
        {/*<Route path="/cocktails/" exact component={Cocktails} />*/}
        {/*<Route path="/cocktails/" exact component={CocktailsPage} />*/}
        {/*<Route*/}
        {/*  path="/cocktails/:id"*/}
        {/*  render={({ match, location, history }) => {*/}
        {/*    const { id } = match.params;*/}
        {/*    return <CocktailDetails id={id} />;*/}
        {/*  }}*/}
        {/*/>*/}

        <Route path={routes.bartenders.link} exact component={Bartenders} />
        <Route path={routes.bartenders.details} component={BartenderDetails} />
        <Route path={routes.musicEvents.link} exact component={MusicEvents} />
        <Route path={routes.musicEvents.details} component={EventDetails} />
        <Route path={routes.blog.link} exact component={BlogPage} />
        <Route path={routes.blog.details} component={BlogDetails} />
        <Route path={routes.contact.link} exact component={Contacts} />
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
