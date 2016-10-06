import React from 'react';
import './Cell.css';
import Flag from './Flag';
class CellHidden extends React.Component {
    render(){
        return (<div>{this.props.cell.marked ? <Flag/> : ''}</div>);
    }
}
export default CellHidden;