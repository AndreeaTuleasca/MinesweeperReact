import React from 'react';

export default class MenuBar extends React.Component{
    render(){
        return (<div className="menu-bar">
                    <div className="menu-input">
                        <span>Bombs</span>
                        <input type="number"/>
                    </div>
                    <div className="menuInput">
                        <span>Rows</span>
                        <input type="number"/>
                    </div>
                    <div className="menu-input">
                        <span>Columns</span>
                        <input type="number"/>
                    </div>
                    <div>
                    </div>
                </div>);
    }
}