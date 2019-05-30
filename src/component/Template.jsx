import React, { Component } from 'react';
import Data from '../config/data';
import Nav from './Nav';
import Signiture from './Signiture';
import Footer from './Footer';
import '../style/Template.css';
var imgStyle = {
    width: "auto",
    height: "400px",
    position: "absolute",
    left: "10px",
  };
export default class Template extends Component {
    state={
        data:Data
      }
    render() {
    return (
      <div className="backGround">
        <Signiture fullname={this.state.data[0].fullName}/>
        <img src="../source/image/185479.jpg" alt="me" style={imgStyle}/>
        <Nav/>
        <div className="contentContaioner">
            {this.props.children}
        </div>
        <Footer info={this.state.data[0]} findMe={this.state.data[2]} skills={this.state.data[1]}/>
      </div>
    )
  }
}
