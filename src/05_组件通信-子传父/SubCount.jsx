import React, { Component } from 'react'

export class SubCount extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.subClick(-1)}>-1</button>
        <button onClick={() => this.props.subClick(-5)}>-5</button>
      </div>
    )
  }
}

export default SubCount