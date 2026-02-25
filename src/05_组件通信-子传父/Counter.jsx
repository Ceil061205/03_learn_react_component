import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Counter extends Component {
  addCount(num) {
    this.props.addClick(num)
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.addCount(1)}>+1</button>
        <button onClick={(e) => this.addCount(5)}>+5</button>
      </div>
    )
  }
}

Counter.propTypes = {
  addClick: PropTypes.func.isRequired
}

export default Counter