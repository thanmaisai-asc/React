import React, { Component } from 'react'

export default class Usergreet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }

    
  render() {
    return (
        (this.state.isLoggedIn) ?
        <div>Welcome to React Thanmai</div> :
        <div>welcome guest</div>
    )
  }
}
