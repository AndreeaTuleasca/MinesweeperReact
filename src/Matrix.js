import React from 'react';
import './Matrix.css';
import Cell from './Cell';

class BombMatrix extends React.Component{

    constructor(){
        super();
        this.matrix = [];
        this.state = {
            BOMB_VALUE: -1, 
            EMPTY_VALUE: 0
        } 
    }

    componentWillMount(){
        this._generateMatrix();
    }
    render(){
        return (<div>{this.state.matrix.map(row => 
                    <div className="bomb-matrix">{row.map(cell => 
                        <Cell cell={cell} onClick={this._cellClicked.bind(this, cell)}/>)}
                    </div>)}
                </div>);
    }

    _cellClicked(cell){
        let matrix = this.state.matrix;

        if(cell.value === this.state.BOMB_VALUE){
            alert('3...2...1...BBOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM');
        }
        if(!cell.value){
           this._discoverEmptyArea([cell]);
        } 
        matrix[cell.row][cell.column].discovered = true;
        this.setState({matrix});
    }

    _discoverEmptyArea(cells){
        if(cells.length === 0){
            return;
        }
        for(let cell of cells){
            this.matrix[cell.row][cell.column].discovered = true;
            let neighbourCells = [];
            //top neighbour
            if(cell.row>0 && !this.matrix[cell.row-1][cell.column].discovered){
                //if it's empty value, add it for neighbour search
                if(this.matrix[cell.row-1][cell.column].value === this.state.EMPTY_VALUE){
                    neighbourCells.push(this.matrix[cell.row-1][cell.column]);
                //if it's  value, mark it as discovered, so the user will se a border of numbers
                } else if(this.matrix[cell.row-1][cell.column].value !== this.state.BOMB_VALUE){
                    this.matrix[cell.row-1][cell.column].discovered = true;
                }
            }
            //bottom neighbour
            if(cell.row< this.matrix.length -1 && !this.matrix[cell.row+1][cell.column].discovered){
                //if it's empty value, add it for neighbour search
                if(this.matrix[cell.row+1][cell.column].value === this.state.EMPTY_VALUE){
                    neighbourCells.push(this.matrix[cell.row+1][cell.column]);
                //if it's  value, mark it as discovered, so the user will se a border of numbers
                } else if(this.matrix[cell.row+1][cell.column].value !== this.state.BOMB_VALUE){
                    this.matrix[cell.row+1][cell.column].discovered = true;
                }
            }
            //left neighbour
            if(cell.column>0 && !this.matrix[cell.row][cell.column-1].discovered){
                //if it's empty value, add it for neighbour search
                if(this.matrix[cell.row][cell.column-1].value === this.state.EMPTY_VALUE){
                    neighbourCells.push(this.matrix[cell.row][cell.column-1]);
                //if it's  value, mark it as discovered, so the user will se a border of numbers
                } else if(this.matrix[cell.row][cell.column-1].value !== this.state.BOMB_VALUE){
                    this.matrix[cell.row][cell.column-1].discovered = true;
                }
            }
            //right neighbour
            if(cell.column< this.matrix[0].length-1 && !this.matrix[cell.row][cell.column+1].discovered){
                //if it's empty value, add it for neighbour search
                if(this.matrix[cell.row][cell.column+1].value === this.state.EMPTY_VALUE){
                    neighbourCells.push(this.matrix[cell.row][cell.column+1]);
                //if it's  value, mark it as discovered, so the user will se a border of numbers
                } else if(this.matrix[cell.row][cell.column+1].value !== this.state.BOMB_VALUE){
                    this.matrix[cell.row][cell.column+1].discovered = true;
                }
            }

            this._discoverEmptyArea(neighbourCells);
        }
    }

    _generateMatrix(){
        this.matrix = this._generateEmptyMatrix(20, 30);
        this._addBombsToMatrix(50);
        this._addValuesToMatrix();
        this.setState({matrix: this.matrix});
    }

    _generateEmptyMatrix(rows, columns){
        let localMatrix = [];
        for(let i=0;i<rows;i++){
            let matrixRow = [];
            for(let j=0;j<columns;j++){
                matrixRow.push({value: 0, row: i, column: j});
            }
            localMatrix.push(matrixRow);
        }
        return localMatrix;
    }

    _addBombsToMatrix(noOfBombs){
        let rows = this.matrix.length;
        let columns = this.matrix[0].length;        
        //formula from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random and adapted
        // Returns a random integer between min (included) and max (included) 
        while(noOfBombs > 0){
            var rowIndex = Math.floor(Math.random() * rows);
            var columnIndex = Math.floor(Math.random() * columns);
            if(this.matrix[rowIndex][columnIndex].value !== this.state.BOMB_VALUE){
                this.matrix[rowIndex][columnIndex].value = this.state.BOMB_VALUE;
                noOfBombs--;
            }
        }
    }

    _addValuesToMatrix(){
        let rows = this.matrix.length;
        let columns = this.matrix[0].length;
        for(let i=0;i<rows;i++){
            for(let j=0;j<columns;j++){
                if(this.matrix[i][j].value === this.state.BOMB_VALUE){
                    this._addValueForNeighboursAbove(i, j);
                    this._addValueForNeighboursNear(i, j);
                    this._addValueForNeighboursBellow(i, j);
                }
            }
        }
    }

    _addValueForNeighboursAbove(i, j){
        if(i>0){
            if(j>0 && this.matrix[i-1][j-1].value !== this.state.BOMB_VALUE){
                this.matrix[i-1][j-1].value++;
            }
            if(this.matrix[i-1][j].value !== this.state.BOMB_VALUE){
                this.matrix[i-1][j].value++;
            }
            if(j< this.matrix[0].length-1 && this.matrix[i-1][j+1].value !== this.state.BOMB_VALUE){
                this.matrix[i-1][j+1].value++;
            }
        }
    }

    _addValueForNeighboursNear(i, j){
        if(j>0 && this.matrix[i][j-1].value !==this.state.BOMB_VALUE){
            this.matrix[i][j-1].value++;
        }
        if(j < this.matrix[0].length-1 && this.matrix[i][j+1].value !== this.state.BOMB_VALUE){
            this.matrix[i][j+1].value++;
        }
    }

    _addValueForNeighboursBellow(i, j){
        if(i<this.matrix.length-1){
            if(j>0 && this.matrix[i+1][j-1].value !== this.state.BOMB_VALUE){
                this.matrix[i+1][j-1].value++;
            }
            if(this.matrix[i+1][j].value !== this.state.BOMB_VALUE){
                this.matrix[i+1][j].value++;
            }
            if(j< this.matrix[0].length-1 && this.matrix[i+1][j+1].value !== this.state.BOMB_VALUE){
                this.matrix[i+1][j+1].value++;
            }
        }
    }
}

export default BombMatrix;