import React from "react";
import Header from "./Header"

export default class Layout extends React.Component {
    constructor() {
      super();
      this.name= "hhuwy";
    }
    
      render() {
      
        return (
          <div className="App">
          <Header/>
          <p>Hello World {this.name} {33*5}</p>
          </div>
        );
      }
    } 
    