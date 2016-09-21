import React, { Component } from 'react';
import './App.css';
import Matrix from './Matrix';
import Bomb from './Bomb'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <Bomb/>
          </div>
          <h2>Minesweeper</h2>
        </div>
        <div className="App-body">
          <Matrix/>
        </div>
      </div>
    );
  }
}

export default App;
