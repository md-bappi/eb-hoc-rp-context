import React, { Component } from "react";
import CounterWrapper from "../utls/counterWrapper";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1>Hover: {this.props.counter}</h1>
        <button onMouseOver={this.props.incrementHandler}>increment</button>
      </div>
    );
  }
}

export default CounterWrapper(HoverCounter);
