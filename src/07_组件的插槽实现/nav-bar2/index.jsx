import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className='nav-bar'> 
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}

// NavBar.propTypes = {
//   children: PropTypes.array
// }

export default NavBar