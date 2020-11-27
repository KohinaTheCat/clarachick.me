import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Website from "./pages/Website";
import M from "./pages/MERN";
import KohinaRun from "./pages/KohinaRun";
import MockShell from "./pages/Shell";
import Main from "./pages/Main";
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
