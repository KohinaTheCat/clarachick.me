import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Main} />
    </div>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
