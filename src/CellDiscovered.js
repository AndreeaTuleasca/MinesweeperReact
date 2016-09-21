import React from 'react';
import './Cell.css';
//the only way of adding dynamic classes?
var classNames = require( 'classnames' ); 

class CellDiscovered extends React.Component {
    
    render(){
        var classes = classNames("cell-discovered", {"cell-bomb":(this.props.cell.isBomb)});
        return (<div className={classes}>{this._getCellDisplayValue()}</div>);
    }
    _getCellDisplayValue(){
        if(this.props.cell.isBomb){
            return 'O';
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