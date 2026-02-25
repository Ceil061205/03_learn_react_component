import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainList from './MainList'
export class Main extends Component {
  render() {
    return (
      <div>
        <MainBanner />
        <MainList />
      </div>
    )
  }
}

export default Main