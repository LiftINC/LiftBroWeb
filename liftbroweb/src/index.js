import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import SideBar from './Components/Sidebar.js';
import User from './Components/User.js';
import Header from './Components/Header.js';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
      <Route path="/" component={SideBar} />
        <Route path="/" component={Header} />
        <Route exact path="/" component={App} />
        <Route path="/einar" component={User} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();

