import React, { Component } from 'react'
import { flushSync } from 'react-dom'

function Hello(props) {
  return <h2>{props.message}</h2>
}

export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 9900,
      msg: 'hhhh'
    }
  }
  changeText() {
    setTimeout(() => {
      // 在18之前,setTimeout里面的setState操作是同步操作
      // 18之后 是异步的
      // this.setState({
      //   msg: 'xxx'
      // })

      // 如果想要之前的效果则调用flushSync
      flushSync(() => {
        this.setState({
          msg: 'xxx'
        })
      })
      console.log(this.state.msg);
    }, 0)
  }
  changeNum() {

  }
  render() {
    const { count, msg } = this.state
    console.log('render');
    
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={e => this.changeNum()}>+1</button>
        <h2>{msg}</h2>
        <button onClick={e => this.changeText()}>update</button>
        <Hello message={msg} />
      </div>
    )
  }
}

export default App