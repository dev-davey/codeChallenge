import React from "react";
import FetchGithubOrgs from "./components/FetchGithubOrgs";
import MoreInfo from "./components/MoreInfo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import "./App.css";

//used hashrouter for routing for a quick solution so that the compenent re-renders on the screen if app is refreshed.

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" Component={App}>
          <FetchGithubOrgs />
        </Route>
        <Route path="/orgs/:name" component={MoreInfo} />
      </Switch>
    </HashRouter>
  );
}
