import React from 'react';
import './Cell.css';
//the only way of adding dynamic classes?
var classNames = require( 'classnames' ); 
class CellHidden extends React.Component {
    render(){
        var classes = classNames({"cell-marked" : (this.props.cell.marked)});
        return (<div className={classes}></div>);
    }
}
export default CellHidden;