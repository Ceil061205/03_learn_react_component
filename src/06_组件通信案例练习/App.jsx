import React, { Component } from 'react'
import TabControl from './TabControl/TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ['新闻', '体育', '娱乐'],
      tabIndex: 0
    }
  }
  render() {
    const { titles, tabIndex } = this.state
    return (
      <div className='app'>
        <h1>父组件</h1>
        <TabControl titles={titles} tabClick={(i) => this.tabClick(i)} />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
  tabClick(index) {
    this.setState({
      tabIndex: index
    })
  }
}

export default App