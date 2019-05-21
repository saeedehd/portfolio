import React from 'react'
import {Route} from "react-router-dom";
import Who from './Who';
import Mystory from './Mystory';
import Myskills from './Myskills';
import App from '../App';

const Router = () => {
    return (
    <>
        <Route path="/" exact  component={App}/>
        <Route path="/WhoAmI" component={Who}/>
        <Route path="/Mystory" component={Mystory}/>
        <Route path="/Myskills" component={Myskills}/>
    </> 
    )
  }
  export default Router
  


