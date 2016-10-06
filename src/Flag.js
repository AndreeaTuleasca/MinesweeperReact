import React from 'react';
import './Flag.css';


export default class Flag extends React.Component{

render(){
    return(<div className="flag-container">
        <div className="flag-top"></div>
        <div className="flag-pole"></div>
    </div>);
}
}