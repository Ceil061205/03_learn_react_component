import React, { Component } from 'react'

export class HomeProduct extends Component {
  render() {
    const { color } = this.context
    return (
      <div>
        HomeProduct
        <span style={{ color }}>这是HomeProduct组件</span>
      </div>
    )
  }
}

HomeProduct.contextType = React.createContext()

export default HomeProduct