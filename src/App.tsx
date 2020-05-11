import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/navigation.component";
import HamburgerMenu from "./components/HamburgerMenu/hamburger-menu.component";
import ITEMS_MOBILE from "./enums/menuitems.const";

import "./App.css";
import "./styles/MyApp.scss";
import JobOffers from "./components/JobOffers/job-offers.component";
import Matchmaking from "./components/main/Matchmaking/Matchmaking";
import BrandStories from "./components/main/BrandStories/BrandStories";
import Live from "./components/main/Live/Live";

function App() {
  console.log(ITEMS_MOBILE.JOB_OFFERS.route);
  return (
    <React.Fragment>
      <HamburgerMenu />
      <Navigation />
      <div className="content">
        <Router>
          <Switch>
            <Route path={ITEMS_MOBILE.MATCHMAKING.route}>
              <Matchmaking />
            </Route>
            <Route path={ITEMS_MOBILE.BRAND_STORIES.route}>
              <BrandStories />
            </Route>
            <Route
              path={ITEMS_MOBILE.JUST_GEEK_IT.route}
              component={() => {
                window.location.replace(document.referrer);
                window.open("https://geek.justjoin.it/", "_blank");
                return <p>Redirecting...</p>;
              }}
            />
            <Route path={ITEMS_MOBILE.LIVE.route}>
              <Live />
            </Route>
            <Route path={ITEMS_MOBILE.JOB_OFFERS.route}>
              <JobOffers />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
