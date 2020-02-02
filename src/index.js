import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import MovieOverview from './pages/movieoverview'

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const routing = (
    // Routing
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/overview" component={MovieOverview} />
      </div>
    </Router>

  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
