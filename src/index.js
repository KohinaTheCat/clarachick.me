import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Drawings from './Pages/Drawings';
import Experience from './Pages/Experience';

// import { Button } from 'evergreen-ui'


ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/drawings" component={Drawings} />
        <Route path="/experience" component={Experience} />
      </div>
     </Router>,
    // <App />,
    document.getElementById('root')
)

serviceWorker.unregister();
