import React, { Component } from 'react';
import './App.css';
import './components/Form.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import BeforeGame from './components/BeforeGame';
import PreparePlayers from './components/PreparePlayers';
import Game from './components/Game';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path='/' component={Home} />
          <Route exact path='/BeforeGame' component={BeforeGame} />
          <Route exact path='/PreparePlayers' component={PreparePlayers} />
          <Route exact path='/AccessCodePlaceholder' component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
