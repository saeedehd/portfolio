import React, { Component } from 'react';
import './App.css';
import Data from './config/data'
import Footer from './component/Footer';
import Signiture from './component/Signiture';

class App extends Component {
  
  state={
    data:Data
  }
  render() {
    return (
    <div className="App">
      <Signiture fullname={this.state.data[0].fullName}/>
      <Footer info={this.state.data[0]} findMe={this.state.data[2]} skills={this.state.data[1]}/>
    </div>
    );
  }
}

export default App;
