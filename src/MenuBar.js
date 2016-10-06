import React, {Component} from 'react';
import './MenuBar.css'

export default class MenuBar extends Component{
    render(){
        return (<div className="menu-bar">
                    <form onSubmit={this._handleSubmit.bind(this)}>
                        <div className="input-container">
                            <span className="input-label">Bombs</span>
                            <input className="input-box" type="number" defaultValue={this.props.bombs} ref={(input) => this._bombs = input}/>
                        </div>
                        <div className="input-container">
                            <span className="input-label">Rows</span>
                            <input className="input-box" type="number" defaultValue={this.props.rows} ref={(input) => {this._rows = input}}/>
                        </div>
                        <div className="input-container">
                            <span className="input-label">Columns</span>
                            <input className="input-box" type="number" defaultValue={this.props.columns} ref={(input => this._columns = input)}/>
                        </div>
                        <div className="input-container">
                            <button className="button-submit" type="submit">Generate</button>
                        </div>
                    </form>
                </div>);
    }

    _handleSubmit(event){
        event.preventDefault();
        this.props.generateMatrixWithUserInput(this._bombs.value, this._rows.value, this._columns.value);
    }
}