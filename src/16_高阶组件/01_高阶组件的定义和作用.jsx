import React, { PureComponent } from 'react'

// 定义一个高阶组件
function hoc(Cpn) {
  // 1.定义一个类组件
  class NewCpn extends PureComponent{
    render() {
      // 将组件进行拦截操作
      return <Cpn name="xyz"/>
    }
  }
  return NewCpn
  // 2.定一个函数组件
  // function Cpn2(props) {

  // }
  // return Cpn2
}

class Hello extends PureComponent{
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return <h2>hellp</h2>
  }
}

const HelloHoc = hoc(Hello)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Hello/>
      </div>
    )
  }
}

export default App