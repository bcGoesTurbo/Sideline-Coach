import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreatePlayer from './components/createplayer.component';
import EditPlayer from './components/editplayer.component';
import Index from './components/index.component';
import Scoreboard from './components/scoreboard.component';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Sideline Coach</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/scoreboard'} className="nav-link">Scoreboard</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/createplayer'} className="nav-link">Create Player</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          {/* <h2>Welcome to Sideline</h2> <br/> */}
          <Switch>
              <Route exact path='/createplayer' component={ CreatePlayer } />
              <Route path='/editplayer/:id' component={ EditPlayer } />
              <Route path='/index' component={ Index } />
              <Route path='/scoreboard' component={ Scoreboard } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App