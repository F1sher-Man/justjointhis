import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import MenuNavigation from "./components/common/Menu/MenuNavigation";
import ITEMS_MOBILE from "./enums/menuitems.const";

import "./App.css";
import JobOffers from "./components/main/JobOffers/JobOffers";
import Matchmaking from "./components/main/Matchmaking/Matchmaking";
import BrandStories from "./components/main/BrandStories/BrandStories";
import Live from "./components/main/Live/Live";

function App() {
  console.log(ITEMS_MOBILE.JOB_OFFERS.route);
  return (
    <React.Fragment>
      <MenuNavigation />
      <Header />
      <div id="content">
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
