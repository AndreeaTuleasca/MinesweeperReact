import React from 'react';
import './Bomb.css'

export default class Bomb extends React.Component{
    render(){
        return (<div className="bomb-cell">
                    <div className="bomb bomb-flame bomb-flame-vertical"></div>
                    <div className="bomb bomb-flame bomb-flame-horizontal"></div>
                    <div className="bomb bomb-wire"></div>
                    <div className="bomb bomb-body"></div>
                </div>);
    }
}