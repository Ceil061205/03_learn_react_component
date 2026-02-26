import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 9900,
      msg: 'hhhh'
    }
  }
  changeText() {
    // this.setState({
    //   // 1.基本语法
    //   // setState是异步的
    //   msg: 'lll'
    // })

    // 2.可以传入一个回调函数
    // 可以对新state编写处理逻辑 可以把之前的state props 传进来
    // this.setState((state, props) => {
    //   console.log(this.state.msg, this.props);
      
    //   return {
    //     msg: 'jjjj'
    //   }
    // })

    // 3.setState是异步调用
    // 如果想要在数据更新后对其进行操作 可以传入第二个参数callback
    this.setState({ msg: 'ssss' }, () => {
      console.log('in', this.state.msg);// ssss
    })
    console.log(this.state.msg); //hhhh
  }
  changeNum() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    const { count, msg } = this.state
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={e => this.changeNum()}>+1</button>
        <h2>{msg}</h2>
        <button onClick={e => this.changeText()}>update</button>
      </div>
    )
  }
}

export default App