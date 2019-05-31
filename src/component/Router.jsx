import React, {Component} from 'react'
import {Route} from "react-router-dom";
import Who from './Who';
import Mystory from './Mystory';
import Myskills from './Myskills';
import Data from '../config/data'

export default class Router extends Component {
    state={
        data:Data
      }
    render() {
        return (
            <>
                <Route path="/" exact  render={props => (<Who {...props} information={this.state.data[0]}/>)}/>
                <Route path="/Mystory" render={props => (<Mystory {...props} information={this.state.data[0]}/>)}/>
                <Route path="/Myskills" render={props => (<Myskills {...props} skills={this.state.data[1]}/>)}/>
                <Route path="/Portfolio" render={props => (<Who {...props} information={this.state.data[0]}/>)}/>
            </> 
            )
    }
}