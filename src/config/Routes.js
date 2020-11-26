import Home from "../pages/Home";
import Content from "../component/content";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/content" component={Content} />
      </Switch>
    </Router>
  );
};

export default Routes;
