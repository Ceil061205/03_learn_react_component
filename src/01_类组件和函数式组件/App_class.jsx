import React, { Component } from 'react'
// 1.类组件
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Raven'
    }
  }
  render() {
    // 1.react元素 通过jsx编写的代码会被编译成React.creteElement 所以返回的就是一个react元素
    return (
      <h2>App - {this.state.name}</h2>
    )
    // 2.数组或者fragments
    // return ["cbax",'xxx']
    // return [
    //   <h2 key="title">App - {this.state.name}</h2>,
    //   <h2 key="title2">App - {this.state.name}</h2>
    // ]
    // 3.字符串或者数值
    // return "hello"
    // return 123
    // 4.字符串或者数值
    // return true
    // return false

  }
}

export default App