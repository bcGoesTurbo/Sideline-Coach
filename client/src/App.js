import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import bgImage from './components/images/background1.jpg';
import CreatePlayer from './components/createplayer.component';
import EditPlayer from './components/editplayer.component';
import Scoreboard from './components/scoreboard.component';
import Home from './components/home.component';
// import Scoreboard from './components/scoreboard.component';
// import Scoring from'./components/Layouts/Scoreboard';


class App extends Component {
  render() {
    return (
      <div styles={{ backgroundImage:`url(${bgImage})` }}>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Sideline Coach</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              
                <li className="nav-item">
                  <Link to={'/createplayer'} className="nav-link">Create Player</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/scoreboard'} className="nav-link">Scoreboard</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          {/* <h2>Welcome to Sideline</h2> <br/> */}
          <Switch>
              <Route exact path='/createplayer' component={ CreatePlayer } />
              <Route path='/editplayer/:id' component={ EditPlayer } />
              <Route path='/scoreboard' component={ Scoreboard } />
              <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App