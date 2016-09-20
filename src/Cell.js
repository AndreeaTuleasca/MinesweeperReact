import React from 'react';
import './Cell.css'

class CellMatrix extends React.Component{
    render(){
        return (<div className="cell-matrix" onClick={this.props.onClick.bind(this)}>{this.props.cell.discovered ? this.props.cell.value : ''}</div>);
    }


}
export default CellMatrix;