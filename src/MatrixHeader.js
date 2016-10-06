import React from 'react';

export default class MatrixHeader extends React.Component{
    render(){
        var divStyle = {
            width: this.props.columns*20 + this.props.columns*6 - 6
        }
        return (<div className="matrix-header" style={divStyle}>
                    <div className="header-row">
                        <div className="header-column header-column-wide">Score</div>
                        <div className="header-column header-column-narrow">
                            <div>Flags</div><div>{this.props.availableFlags}</div>
                        </div>
                        <div className="header-column header-column-narrow matrix-header-icon">Face</div>
                        <div className="header-column header-column-narrow">
                            <div>Bombs</div><div>{this.props.bombs}</div>
                        </div>
                        <div className="header-column header-column-wide">Highest score</div>
                    </div>
                </div>)
    };
}