import React, { Component } from 'react';
import './App.css';
import Data from './config/data'
import Footer from './component/Footer';
import Signiture from './component/Signiture';
import Nav from './component/Nav';
import Who from "./component/Who";
import Mystory from "./component/Mystory";
import Myskills from "./component/Myskills";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  
  state={
    data:Data
  }
  render() {
    return (
    <div className="App">
      <Signiture fullname={this.state.data[0].fullName}/>
      <Footer info={this.state.data[0]} findMe={this.state.data[2]} skills={this.state.data[1]}/>
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route path="/" exact  component={App}/>
            <Route path="/WhoAmI" component={Who}/>
            <Route path="/Mystory" component={Mystory}/>
            <Route path="/Myskills" component={Myskills}/>
          </Switch>
        </div>
      </Router>
    </div>    
    );
  }
}

export default App;
