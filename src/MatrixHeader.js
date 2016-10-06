import React from 'react';
import smiley from '../img/smiley.svg';
import dead from '../img/dead.svg';
import sunglasses from '../img/sunglasses.svg';

export default class MatrixHeader extends React.Component{
    render(){
        var divStyle = {
            width: this.props.columns*20 + this.props.columns*6 - 6
        }

        var emoticon = smiley;
        if(this.props.gameState === 'game-over'){
            emoticon = dead;
        } else if(this.props.gameState === 'game-won'){
            emoticon = sunglasses;
        }
        return (<div className="matrix-header" style={divStyle}>
                    <div className="header-row">
                        <div className="header-column header-column-wide">Score</div>
                        <div className="header-column header-column-narrow">
                            <div>Flags</div><div>{this.props.availableFlags}</div>
                        </div>
                        <div className="header-column header-column-narrow">
                        <img className="matrix-header-icon" src={emoticon} alt="smiley"/></div>
                        <div className="header-column header-column-narrow">
                            <div>Bombs</div><div>{this.props.bombs}</div>
                        </div>
                        <div className="header-column header-column-wide">Highest score</div>
                    </div>
                </div>)
    };
}