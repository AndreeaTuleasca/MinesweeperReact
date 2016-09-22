import React, { Component } from 'react';
import './App.css';
import MenuBar from './MenuBar'
import Matrix from './Matrix';
import Bomb from './Bomb'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      bombs: 5,
      rows: 20,
      columns: 30  
    }
  }
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
          <MenuBar getMatrixSeeds={this._getMatrixSeeds.bind(this)} bombs={this.state.bombs} rows={this.state.rows} columns={this.state.columns}/>
          <Matrix bombs={this.state.bombs} rows={this.state.rows} columns={this.state.columns}/>
        </div>
      </div>
    );
  }

  _getMatrixSeeds(bombs, rows, columns){
      this.bombs = bombs;
      this.rows = rows;
      this.columns = columns;
      this.setState(bombs, rows, columns);
  }
}
