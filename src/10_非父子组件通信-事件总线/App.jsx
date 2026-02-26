import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  componentDidMount() {
    // eventBus.on('bannerPrev', (data) => {
    //   console.log('app中监听到pre事件', data);
    //   this.setState({
    //     name: data
    //   })
    // })
    // eventBus.on('bannerPrev', this.bannerPrevClick)
    eventBus.on('bannerPrev', this.bannerPrevClick, this)
    eventBus.on('bannerNext', this.bannerNextClick, this)
  }
  // bannerPrevClick = (data) => {
  //   console.log('app中监听到pre事件', data);
  //   this.setState({
  //     name: data
  //   })
  // }
  bannerPrevClick(data) {
    console.log('app中监听到pre事件', data);
    this.setState({
      name: data
    })
  }
  bannerNextClick(data) {
    console.log('app中监听到next事件', data);
    this.setState({
      name: data
    })
  }
  componentWillUnmount() {
    eventBus.off('bannerPrev', this.bannerPrevClick)
    eventBus.off('bannerNext', this.bannerNextClick)
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h2>App组件: {name}</h2>
        <Home />
      </div>
    )
  }
}

export default App