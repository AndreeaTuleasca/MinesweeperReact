import React from 'react';
import './Matrix.css';
import Cell from './Cell';

export default class Matrix extends React.Component{
    
    render(){
        return (<div className="matrix">{this.props.matrix.map(row => 
                    <div  key={row[0].row} className="row">{row.map(cell => 
                        <Cell key={cell.column} cell={cell} onClick={this.props.onClick.bind(this, cell)}/>)}
                    </div>)}
                </div>);
    }
}