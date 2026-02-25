import React from 'react'
import Hello from './Hello'
class App extends React.Component {
  // 1.构造方法
  constructor() {
    console.log('a constructor')
    super()
    this.state = {
      count: 0,
      isShowH: true
    }
  }
  switchShowH() {
    this.setState({
      isShowH: !this.state.isShowH
    })
  }
  // 2.执行render方法
  render() {
    const { isShowH } = this.state
    console.log('a render')
    return (
      <div>
        <h2>哈哈哈哈</h2>
        <button onClick={() => this.switchShowH()}>切换组件</button>
        {isShowH && <Hello />}
      </div>
    )
  }
  // 3.组件挂载完成
  componentDidMount() {
    console.log('a componentDidMount')
  }

  // 4.组件更新完成
  componentDidUpdate() {
    console.log('a componentDidUpdate')
  }
}

export default App