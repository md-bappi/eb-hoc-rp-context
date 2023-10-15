import React, { Component } from "react";
import CounterWrapper from "../utls/counterWrapper";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>Count: {this.props.counter}</h1>
        <button onClick={this.props.incrementHandler}>increment</button>
      </div>
    );
  }
}

export default CounterWrapper(ClickCounter);
