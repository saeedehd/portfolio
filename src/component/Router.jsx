import React from 'react'
import {Route} from "react-router-dom";
import Who from './Who';
import Mystory from './Mystory';
import Myskills from './Myskills';

const Router = () => {
    return (
    <>
        <Route path="/" exact  component={Who}/>
        <Route path="/Mystory" component={Mystory}/>
        <Route path="/Myskills" component={Myskills}/>
        <Route path="/Portfolio" component={Who}/>
    </> 
    )
  }
  export default Router
  


