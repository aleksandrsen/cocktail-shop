import React from "react";
// Styles
import "./App.scss";
import "../../src_/var.scss";
import "../../src_/grid.scss";
import "../../src_/common.scss";
// Components
import Header from "../header";
import Footer from "../footer";
import { Route, Switch } from "react-router-dom";
// Pages
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Bartenders from "../pages/bartenders";
import BlogPage from "../pages/blog/blog-page";
import EventDetails from "../pages/event-details";
import Contacts from "../pages/contact/contact-page";
import CocktailDetails from "../pages/cocktail-details";
import Cocktails from "../pages/cocktails/cocktails-page";
import BartenderDetails from "../pages/bartender-details";
import BlogDetails from "../pages/blog-details/blog-details";
import MusicEvents from "../pages/music-events/music-events";
// Utils
import { routes } from "../../routes";

const App = (props) => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path={routes.home.link} exact component={Home} />
        <Route path={routes.about.link} exact component={About} />
        <Route path={routes.cocktails.details} component={CocktailDetails} />
        <Route path={routes.cocktails.link} component={Cocktails} />
        <Route path={routes.bartenders.details} component={BartenderDetails} />
        <Route path={routes.bartenders.link} component={Bartenders} />
        <Route path={routes.musicEvents.details} component={EventDetails} />
        <Route path={routes.musicEvents.link} component={MusicEvents} />
        <Route path={routes.blog.details} component={BlogDetails} />
        <Route path={routes.blog.link} component={BlogPage} />
        <Route path={routes.contact.link} exact component={Contacts} />
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
