import React from 'react';
import './Cell.css'; 
import Bomb from './Bomb';

class CellDiscovered extends React.Component {
    
    render(){
        return (<div className="cell-discovered">{this._getCellDisplayValue()}</div>);
    }
    _getCellDisplayValue(){
        if(this.props.cell.isBomb){
            return (<Bomb/>);
        } 
        else if(this.props.cell.isValue){
            return this.props.cell.value;
        } 
        else {
            return '';
        }
    }
}
export default CellDiscovered;