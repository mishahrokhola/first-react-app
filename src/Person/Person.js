import React, { Component } from 'react'

class Person extends Component {
  render() {
    return (
      <h2>I'm {this.props.name}!</h2>
    )
  }
}

export default Person;