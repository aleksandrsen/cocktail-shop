import React from "react";
import "./app.scss";
// Components
import Header from "../header";
import Footer from "../footer";
import { Route, Switch } from "react-router-dom";
// Pages
// import Home from "../pages/home";
import Home from "./../pages/home"
import About from "../pages/about";
import BlogPage from "../pages/blog";
import Contact from "../pages/contact";
import Cocktails from "../pages/cocktails";
import Bartenders from "../pages/bartenders";
import MusicEvents from "../pages/music-events";
import BlogDetails from "../pages/blog-details";
import EventDetails from "../pages/event-details";
import CocktailDetails from "../pages/cocktail-details";
import BartenderDetails from "../pages/bartender-details";

// Utils
import { routes } from "../../config/routes";

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
        <Route path={routes.contact.link} exact component={Contact} />
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
