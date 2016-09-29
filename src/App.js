import React, { Component } from 'react';
import './App.css';
import MenuBar from './MenuBar'
import Matrix from './Matrix';
import Bomb from './Bomb';
import {generateMatrix, updateMatrixWithDiscoveredCell, updateMatrixWithMarkedCell} from './MatrixGenerator'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      bombs: 50,
      rows: 20,
      columns: 30 , 
      matrix: []
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
          <Matrix matrix={this.state.matrix} onClick={this.cellClicked.bind(this)}/>
        </div>
      </div>
    );
  }
  
  generateMatrixWithUserInput(bombs, rows, columns){
    let matrix = generateMatrix(bombs, rows, columns);
    this.setState({bombs, rows, columns, matrix});
  }


  cellClicked(cell, event){
        const LELFT_CLICK = 0;
        const RIGHT_CLICK = 2;
        event.preventDefault();
        let matrix = this.state.matrix;
        if(event.button === LELFT_CLICK){
           matrix = updateMatrixWithDiscoveredCell(cell, matrix);
        } 
        else if(event.button === RIGHT_CLICK){
           matrix = updateMatrixWithMarkedCell(cell, matrix);
        }
        this.setState(matrix);
    }
}
