import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Website from "./Pages/Website";
import M from "./Pages/MERN";
import KohinaRun from "./Pages/KohinaRun";
import MockShell from "./Pages/Shell";
import Main from "./Pages/Main";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <ScrollToTop></ScrollToTop>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about_website" component={Website} />
      <Route exact path="/about_MERN" component={M} />
      <Route exact path="/about_kohinarun" component={KohinaRun} />
      <Route exact path="/about_mockshell" component={MockShell} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
