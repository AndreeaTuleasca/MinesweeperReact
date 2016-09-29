var BOMB_VALUE = -1;
var EMPTY_VALUE = 0;
var matrix = [];

export function generateMatrix(bombs, rows, columns){
    matrix = _generateEmptyMatrix(rows, columns);
    _addBombsToMatrix(bombs);
    _addValuesToMatrix();
    return matrix;
}

export function resetGame(){
    generateMatrix();
}

export function updateMatrixWithDiscoveredCell(cell, currentMatrix){
    matrix = currentMatrix; 
    if(cell.isBomb){
        _discoverAllBombs();
    }
    else if(!cell.isValue){
        _discoverEmptyArea([cell]);
    } 
    matrix[cell.row][cell.column].discovered = true;
    return matrix;
}

export function updateMatrixWithMarkedCell(cell, currentMatrix){
    matrix = currentMatrix;
    matrix[cell.row][cell.column].marked = true;
    return matrix;
}

function _generateEmptyMatrix(rows, columns){
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

function _addBombsToMatrix(noOfBombs){
    let rows = matrix.length;
    let columns = matrix[0].length;        
    //formula from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random and adapted
    // Returns a random integer between min (included) and max (included) 
    while(noOfBombs > 0){
        var rowIndex = Math.floor(Math.random() * rows);
        var columnIndex = Math.floor(Math.random() * columns);
        if(!matrix[rowIndex][columnIndex].isValue){
            matrix[rowIndex][columnIndex].value = BOMB_VALUE;
            matrix[rowIndex][columnIndex].isBomb = true;
            noOfBombs--;
        }
    }
}

function _addValuesToMatrix(){
    let rows = matrix.length;
    let columns = matrix[0].length;
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(matrix[i][j].isBomb){
                _addValueForNeighboursAbove(i, j);
                _addValueForNeighboursNear(i, j);
                _addValueForNeighboursBellow(i, j);
            }
        }
    }
}

function _addValueForNeighboursAbove(i, j){
    if(i>0){
        if(j>0 && !matrix[i-1][j-1].isBomb){
            matrix[i-1][j-1].value++;
            matrix[i-1][j-1].isValue = true;
        }
        if(!matrix[i-1][j].isBomb){
            matrix[i-1][j].value++;
            matrix[i-1][j].isValue = true;
        }
        if(j< matrix[0].length-1 && !matrix[i-1][j+1].isBomb){
            matrix[i-1][j+1].value++;
            matrix[i-1][j+1].isValue = true;
        }
    }
}

function _addValueForNeighboursNear(i, j){
    if(j>0 && !matrix[i][j-1].isBomb){
        matrix[i][j-1].value++;
        matrix[i][j-1].isValue = true;
    }
    if(j < matrix[0].length-1 && !matrix[i][j+1].isBomb){
        matrix[i][j+1].value++;
        matrix[i][j+1].isValue = true;
    }
}

function _addValueForNeighboursBellow(i, j){
    if(i<matrix.length-1){
        if(j>0 && !matrix[i+1][j-1].isBomb){
            matrix[i+1][j-1].value++;
            matrix[i+1][j-1].isValue = true;
        }
        if(!matrix[i+1][j].isBomb){
            matrix[i+1][j].value++;
            matrix[i+1][j].isValue = true;
        }
        if(j< matrix[0].length-1 && !matrix[i+1][j+1].isBomb){
            matrix[i+1][j+1].value++;
            matrix[i+1][j+1].isValue = true;
        }
    }
}

function _discoverAllBombs(){
    let rows = matrix.length;
    let columns = matrix[0].length;
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(matrix[i][j].isBomb){
                matrix[i][j].discovered = true;
            }
        }
    }
}

function _discoverEmptyArea(cells){
    if(cells.length === 0){
        return;
    }
    for(let cell of cells){
        matrix[cell.row][cell.column].discovered = true;
        let neighbourCells = [];
        //top neighbour
        if(cell.row>0 && !matrix[cell.row-1][cell.column].discovered){
            //if it's empty value, add it for neighbour search
            if(!matrix[cell.row-1][cell.column].isValue){
                neighbourCells.push(matrix[cell.row-1][cell.column]);
            //if it's  value, mark it as discovered, so the user will se a border of numbers
            } else if(!matrix[cell.row-1][cell.column].isBomb){
                matrix[cell.row-1][cell.column].discovered = true;
            }
        }
        //bottom neighbour
        if(cell.row< matrix.length -1 && !matrix[cell.row+1][cell.column].discovered){
            //if it's empty value, add it for neighbour search
            if(matrix[cell.row+1][cell.column].value === EMPTY_VALUE){
                neighbourCells.push(matrix[cell.row+1][cell.column]);
            //if it's  value, mark it as discovered, so the user will se a border of numbers
            } else if(!matrix[cell.row+1][cell.column].isBomb){
                matrix[cell.row+1][cell.column].discovered = true;
            }
        }
        //left neighbour
        if(cell.column>0 && !matrix[cell.row][cell.column-1].discovered){
            //if it's empty value, add it for neighbour search
            if(matrix[cell.row][cell.column-1].value === EMPTY_VALUE){
                neighbourCells.push(matrix[cell.row][cell.column-1]);
            //if it's  value, mark it as discovered, so the user will se a border of numbers
            } else if(!matrix[cell.row][cell.column-1].isBomb){
                matrix[cell.row][cell.column-1].discovered = true;
            }
        }
        //right neighbour
        if(cell.column< matrix[0].length-1 && !matrix[cell.row][cell.column+1].discovered){
            //if it's empty value, add it for neighbour search
            if(matrix[cell.row][cell.column+1].value === EMPTY_VALUE){
                neighbourCells.push(matrix[cell.row][cell.column+1]);
            //if it's  value, mark it as discovered, so the user will se a border of numbers
            } else if(!matrix[cell.row][cell.column+1].isBomb){
                matrix[cell.row][cell.column+1].discovered = true;
            }
        }

        _discoverEmptyArea(neighbourCells);
    }
}