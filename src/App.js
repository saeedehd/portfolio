import React, { Component } from 'react';
import Template from './component/Template'
import Router from './component/Router';

class App extends Component {

  render() {
    return (
      <Template>
          <Router/>
      </Template>   
    );
  }
}

export default App;
