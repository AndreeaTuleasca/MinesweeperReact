import React from 'react';
import './Matrix.css';
import Cell from './Cell';
import MatrixHeader from './MatrixHeader'

export default class Matrix extends React.Component{
    
    render(){
        var divStyle = {
            width: this.props.columns*20 + this.props.columns*6
        }
        return (<div className="matrix" style={divStyle}>
            <MatrixHeader columns={this.props.columns} bombs={this.props.bombs} availableFlags={this.props.availableFlags}/>
            <div>{this.props.matrix.map(row => 
                <div  key={row[0].row} className="row">{row.map(cell => 
                    <Cell key={cell.column} cell={cell} onClick={this.props.onClick.bind(this, cell)}/>)}
                </div>)}
            </div> 
        </div>);
    }
}