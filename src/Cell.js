import React from 'react';
import './Cell.css'
import CellDiscovered from './CellDiscovered';
import CellHidden from './CellHidden';

export default class Cell extends React.Component{
    render(){
        return (<div className="cell" onClick={this.props.onClick.bind(this)}>
                    {this.props.cell.discovered ? <CellDiscovered cell={this.props.cell}/> : 
                    <CellHidden cell={this.props.cell}/>}
                </div>);
    }
}