import React, { Component } from 'react';
import Data from '../config/data';
import Nav from './Nav';
import Signiture from './Signiture';
import Footer from './Footer';
import '../style/Template.css';
import me from '../source/image/saeedeh.png'
export default class Template extends Component {
    state={
        data:Data
      }
    render() {
    return (
      <div className="backGround">
        <Signiture fullname={this.state.data[0].fullName}/>
        <img src={me} alt="me" className="image"/>
        <Nav/>
        <div className="contentContaioner">
            {this.props.children}
        </div>
        <Footer info={this.state.data[0]} findMe={this.state.data[2]}/>
      </div>
    )
  }
}
