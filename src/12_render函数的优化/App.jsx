import React, { PureComponent } from 'react'
import Home from './Home.jsx'
import Rcommend from './Rcommend.jsx'
import ProFile from './ProFile.jsx'
// PureComponent 浅层比较第一层的数据是否变化来重新渲染与否
export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 0,
      msg: 'xyz'
    } 
  }
  // SCU优化
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.msg === nextState.msg && this.state.count === nextState.count) {
  //     return false
  //   } else return true
  // }
  changeNum() {
    this.setState({
      count: this.state.count + 1 
    })
  }
  changeText() {
    this.setState({
      msg: 'xy1z'
    })
  }
  render() {
    console.log('a render');
    
    const {count, msg} = this.state
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => this.changeNum()}>+</button>
        <h2>{msg}</h2>
        <button onClick={() => this.changeText()}>upda</button>
        <Home msg={msg} />
        <Rcommend />
        <ProFile msg={msg} />
      </div>
    )
  }
}

export default App