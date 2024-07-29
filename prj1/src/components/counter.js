import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    // Bind the incrementCount method to this instance
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => {
      console.log("The state is " + this.state.count);
    });
  }

  render() {
    return (
      <>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Increment</button>
      </>
    );
  }
}
