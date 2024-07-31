import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count:0
      }
    }

incrementCount = () =>{
    this.setState({
        count: this.state.count+1
    })
}

//painting and repaint
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>increment {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
