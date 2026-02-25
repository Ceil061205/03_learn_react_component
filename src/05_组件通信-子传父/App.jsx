import React, { Component } from 'react'
import Counter from './Counter'
import SubCount from './SubCount'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  changeCount(count) {
    this.setState({
      count: this.state.count + count
    })
  }
  render() {
    const { count } = this.state
    return (
      <div className='app'>
        <h1>父组件 {count}</h1>
        <Counter addClick={(count) => this.changeCount(count)} />
        <SubCount subClick={(count) => this.changeCount(count)} />
      </div>
    )
  }
}

export default App