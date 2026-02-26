import React, { Component } from 'react'

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
    this.setState({
      msg: 'xxx'
    })
  }
  changeNum() {
    // setState是异步的 这几次被合并了
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })

    // 如果想要不被合并 传入一个回调函数
    this.setState((state) => {
      console.log(state.count);
      
      return {
        count: state.count + 1
      }
    })
    this.setState((state) => {
      console.log(state.count);
      
      return {
        count: state.count + 1
      }
    })
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
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