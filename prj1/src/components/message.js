import React, { Component } from 'react'

export default class Message extends Component {

    constructor() {
        super()
        this.state = {
          msg: "Click on subscribe for more updates",
        };
      }
    
      changeMessage() {
        this.setState({ msg: "Thank you for subscribing" });
      }
    

  render() {
    return (
        <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>    )
  }
}
