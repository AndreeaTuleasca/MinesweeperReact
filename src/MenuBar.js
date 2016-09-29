import React, {Component} from 'react';

export default class MenuBar extends Component{
    render(){
        return (<div className="menu-bar">
                    <form onSubmit={this._handleSubmit.bind(this)}>
                        <div className="menu-input">
                            <span>Bombs</span>
                            <input type="number" defaultValue={this.props.bombs} ref={(input) => this._bombs = input}/>
                        </div>
                        <div className="menuInput">
                            <span>Rows</span>
                            <input type="number" defaultValue={this.props.rows} ref={(input) => {this._rows = input}}/>
                        </div>
                        <div className="menu-input">
                            <span>Columns</span>
                            <input type="number" defaultValue={this.props.columns} ref={(input => this._columns = input)}/>
                        </div>
                        <div>
                            <button type="submit">Generate</button>
                        </div>
                    </form>
                </div>);
    }

    _handleSubmit(event){
        event.preventDefault();
        this.props.generateMatrixWithUserInput(this._bombs.value, this._rows.value, this._columns.value);
    }
}