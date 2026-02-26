import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {}
    this.titleRef = createRef()
    this.tel = null
  }
  getDOM() {
    // 提前创建一个ref
    console.log(this.titleRef.current);
    console.log(this.tel);
  }
  render() {
    return (
      <div>
        <h3 ref={this.titleRef}>r</h3>
        <h2 ref={el => { this.tel = el}}>1</h2>
        <button onClick={() => this.getDOM()}>获取dom</button>
      </div>
    )
  }
}
