import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Footer from "./components/Footer";
import Website from "./Pages/Website";
import DrawView from "./Pages/DrawView";
import KohinaRun from "./Pages/KohinaRun";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./Pages/Main";
import OhNo from "./Pages/OhNo";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop></ScrollToTop>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about_website" component={Website} />
      <Route exact path="/about_drawview" component={DrawView} />
      <Route exact path="/about_kohinarun" component={KohinaRun} />
      <Route path="/RouteError" component={OhNo} />
      <Redirect to="/RouteError" />
    </Switch>
    <Footer></Footer>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
