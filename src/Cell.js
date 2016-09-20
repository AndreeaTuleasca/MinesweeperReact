import React from 'react';
import './Cell.css'
import CellDiscovered from './CellDiscovered';

class CellMatrix extends React.Component{
    render(){
        return (<div className="cell" onClick={this.props.onClick.bind(this)}>{this.props.cell.discovered ? <CellDiscovered cell={this.props.cell}/> : ''}</div>);
    }


}
export default CellMatrix;