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
  changeItem(item) {
    if (item === '新闻') {
      return <span>{item}</span>
    } else if (item === '体育') {
      return <button>{item}</button>
    } else if (item === '娱乐') {
      return <i>{item}</i>
    }
  }
  render() {
    const { titles, tabIndex } = this.state
    return (
      <div className='app'>
        <h1>父组件</h1>
        <TabControl titles={titles} tabClick={(i) => this.tabClick(i)} itemType={(item) => this.changeItem(item)} />
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