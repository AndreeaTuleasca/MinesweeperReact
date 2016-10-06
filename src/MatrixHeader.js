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
                        <div className="header-column header-column-wide">
                            <div className="matrix-header-text">Score</div>
                            <div className="matrix-header-value">67</div>
                        </div>
                        <div className="header-column header-column-narrow">
                            <div className="matrix-header-text">Flags</div>
                            <div className="matrix-header-value">{this.props.availableFlags}</div>
                        </div>
                        <div className="header-column header-column-narrow">
                            <img className="matrix-header-icon" src={emoticon} alt="smiley"/>
                        </div>
                        <div className="header-column header-column-narrow">
                            <div className="matrix-header-text">Bombs</div>
                            <div className="matrix-header-value">{this.props.bombs}</div>
                        </div>
                        <div className="header-column header-column-wide">
                            <div className="matrix-header-text">Highest score</div>
                            <div className="matrix-header-value">100</div>
                        </div>
                    </div>
                </div>)
    };
}