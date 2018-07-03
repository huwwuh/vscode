import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.name= "hhuwy";
}
  getVal(val) {
    return "huwy";
  }
  render() {
  
    return (
      <div className="App">
      <p>Hello World {this.name} {3*5}</p>
      </div>
    );
  }
} 

export default App;
 