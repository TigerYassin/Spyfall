import React, { Component } from 'react';
import './App.css';
import './components/Form.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import BeforeGame from './components/BeforeGame';
import PreparePlayers from './components/PreparePlayers';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path='/' component={Home} />
          <Route exact path='/BeforeGame' component={BeforeGame} />
          <Route exact path='/starting' component={PreparePlayers} />
        </div>
      </Router>
    );
  }
}

export default App;
