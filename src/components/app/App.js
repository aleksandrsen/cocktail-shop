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
import BlogDetailsPage from "../pages/blog/blog-details-page";
import Cocktails from "../pages/cocktails";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contacts from "../pages/contact/contact-page";
// import Bartenders from "../pages/bartenders-section/bartenders-section";
import BlogPage from "../pages/blog/blog-page";
import MusicEvents from "../pages/music&events/music-event-page";
import EventDetails from "../pages/music&events/event-details";
import CocktailsPage from "../pages/cocktails/cocktails-page";

import CocktailDetails from "../pages/cocktails/cocktail-details";
import Bartenders from "../pages/bartenders";

const App = (props) => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/*<Route path="/cocktails/" exact component={Cocktails} />*/}
        {/*<Route path="/cocktails/" exact component={CocktailsPage} />*/}
        {/*<Route*/}
        {/*  path="/cocktails/:id"*/}
        {/*  render={({ match, location, history }) => {*/}
        {/*    const { id } = match.params;*/}
        {/*    return <CocktailDetails id={id} />;*/}
        {/*  }}*/}
        {/*/>*/}

        <Route path="/bartenders/" exact component={Bartenders} />
        {/*<Route*/}
        {/*  path="/bartenders-section/:id"*/}
        {/*  render={({ match }) => {*/}
        {/*    const { id } = match.params;*/}
        {/*    return <BartenderDetails id={id} />;*/}
        {/*  }}*/}
        {/*/>*/}

        {/*<Route path="/music-events/" exact component={MusicEvents} />*/}
        {/*<Route*/}
        {/*  path="/music-events/:id"*/}
        {/*  render={({ match }) => {*/}
        {/*    let { id } = match.params;*/}
        {/*    return <EventDetails eventId={id} />;*/}
        {/*  }}*/}
        {/*/>*/}

        {/*<Route path="/blog/" exact component={BlogPage} />*/}
        {/*<Route*/}
        {/*  path="/blog/:id"*/}
        {/*  render={({ match }) => {*/}
        {/*    const { id } = match.params;*/}
        {/*    return <BlogDetailsPage blogPostId={id} />;*/}
        {/*  }}*/}
        {/*/>*/}

        {/*<Route path="/contact" exact component={Contacts} />*/}
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
