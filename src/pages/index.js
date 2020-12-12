import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import Home from "./Home";
import Error from "./Error";
import Jobpostpage from "./Jobpostpage";
import AppHeader from "../components/header/header";
//header with nav bar:
// import
const RouterWrapper = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Jobpostpage">
          <Jobpostpage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterWrapper;
