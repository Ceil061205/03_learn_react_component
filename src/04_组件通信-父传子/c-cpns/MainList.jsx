import React, { Component } from 'react'

export class MainList extends Component {
  render() {
    const { lists } = this.props
    return (
      <div>
        <h2>MainList</h2>
        <ul>
          {
            lists.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainList