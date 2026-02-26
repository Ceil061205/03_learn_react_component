import React, { PureComponent, createRef, forwardRef } from 'react'
// ref是不能获取到函数式组件 可以获取内部的某一个节点元素
const H = forwardRef(function(props, ref) {
  return <div><h2 ref={ref}>H</h2></div>
}
)
class Hello extends PureComponent{
  render() {
    return <h2>hello</h2>
  }
}
export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {}
    this.titleRef = createRef()
    this.Ref = createRef()
  }
  getDOM() {
    // 提前创建一个ref
    console.log(this.titleRef.current);
    console.log(this.Ref);
  }
  render() {
    return (
      <div>
        <Hello ref={this.titleRef} />
        <H ref={this.Ref} />
        <button onClick={() => this.getDOM()}>获取dom</button>
      </div>
    )
  }
}
