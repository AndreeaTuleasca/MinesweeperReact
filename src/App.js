import React, { Component } from 'react';
import './App.css';
import MenuBar from './MenuBar'
import Matrix from './Matrix';
import Bomb from './Bomb';
import {updateGameState, generateMatrix, updateMatrixWithDiscoveredCell, updateMatrixWithMarkedCell} from './MatrixGenerator';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      gameState: 'not-started', //not-started, in-progress, game-over, game-won
      availableFlags: 50, 
      bombs: 50,
      rows: 20,
      columns: 30, 
      matrix: [],
      onClick: this.cellClicked.bind(this)
    }
  }

  componentWillMount(){
      let matrix = generateMatrix(this.state.bombs, this.state.rows, this.state.columns);
      this.setState({matrix});
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
          <MenuBar generateMatrixWithUserInput={this.generateMatrixWithUserInput.bind(this)} bombs={this.state.bombs} rows={this.state.rows} columns={this.state.columns}/>
          <Matrix {...this.state}/>
        </div>
      </div>
    );
  }
  
  generateMatrixWithUserInput(bombs, rows, columns){
    let matrix = generateMatrix(bombs, rows, columns);
    this.setState({bombs, rows, columns, matrix, availableFlags: bombs, gameState: 'in-progress'});
  }


  cellClicked(cell, event){
        event.preventDefault();
        if(this.state.gameState === 'game-over'){
          return false;
        }
        if(this.state.gameState === 'game-won'){
          return;
        }
        const LELFT_CLICK = 0;
        const RIGHT_CLICK = 2;
        let nextState;
       if(event.button === LELFT_CLICK){
           nextState = updateMatrixWithDiscoveredCell(cell, this.state);
           nextState = updateGameState(this.state);
        } 
        else if(event.button === RIGHT_CLICK){
          if(cell.discovered){
            return;
          } else {
           nextState = updateMatrixWithMarkedCell(cell, this.state);
          }
        }
        this.setState(nextState);
    }
}
