import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Mike from './components/Mike.js'
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      color: 'purlple',
      num: "7"
    }
  }

  render(){
    return(
      <div className="App">
        <h1> Hello Welcome to Mike's World! </h1>
        <Mike color={this.state.color} num={this.state.num}/>
      </div>
    );
  }
}

export default hot(module)(App);
