import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";
import MenuNavigation from "./components/common/MenuNavigation";
import Raz from "./components/subpages/raz";
import Sto from "./components/subpages/sto";
import ITEMS_MOBILE from "./enums/menuitems.const";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <MenuNavigation />
      <Header />
      <div id="content">
        <Router>
          <Switch>
            <Route path={ITEMS_MOBILE.MATCHMAKING.route}>
              <Raz />
            </Route>
            <Route path={ITEMS_MOBILE.JOB_OFFERS.route}>
              <Sto />
            </Route>
            <Route
              path={ITEMS_MOBILE.JUST_GEEK_IT.route}
              component={() => {
                window.location.replace(document.referrer);
                window.open("https://geek.justjoin.it/", "_blank");
                return <p>Redirecting...</p>;
              }}
            />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
