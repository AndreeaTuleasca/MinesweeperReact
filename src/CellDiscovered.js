import React from 'react';
import './Cell.css';
var classNames = require( 'classnames' ); 
class CellDiscovered extends React.Component {
    render(){
        var classes = classNames("cell-discovered", {"cell-bomb":(this.props.cell.value === -1)});
        return (<div className={classes}>{this.props.cell.value}</div>);
    }
}
export default CellDiscovered;