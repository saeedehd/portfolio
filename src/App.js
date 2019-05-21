import React, { Component } from 'react';
import './App.css';
import Data from './config/data'
import Footer from './component/Footer';
import Signiture from './component/Signiture';
import Image from './component/Image';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import Router from './component/Router';

class App extends Component {
  state={
    data:Data
  }
  render() {
    return (
    <div className="App">
      <Signiture fullname={this.state.data[0].fullName}/>
      <Image/>
      <Footer info={this.state.data[0]} findMe={this.state.data[2]} skills={this.state.data[1]}/>
      <BrowserRouter>
        <Nav>
          <Router/>
        </Nav>
      </BrowserRouter>
    </div>    
    );
  }
}

export default App;
