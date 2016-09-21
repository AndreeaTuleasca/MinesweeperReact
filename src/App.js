import React, { Component } from 'react';
import './App.css';
import MenuBar from './MenuBar'
import Matrix from './Matrix';
import Bomb from './Bomb'

export default class App extends Component {
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
          <MenuBar/>
          <Matrix/>
        </div>
      </div>
    );
  }
}
