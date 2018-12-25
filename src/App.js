import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Buttons } from './components/Button.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
      </div>
    );
  }
}

export default App;
