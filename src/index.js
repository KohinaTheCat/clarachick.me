import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./Pages/Main";
import OhNo from "./Pages/OhNo";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/RouteError" component={OhNo} />
      <Redirect to="/RouteError" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
