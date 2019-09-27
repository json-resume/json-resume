import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}

export default hot(module)(App);
