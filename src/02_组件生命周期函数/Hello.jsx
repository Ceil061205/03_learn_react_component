import React from 'react'
class Hello extends React.Component {
  constructor() {
    // 1.构造方法
    console.log("h constructor");
    super()
    this.state = {
      count: 1
    }
  }

  changeCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    // 2.执行render方法
    console.log("h render");
    const { count } = this.state
    return (
      <div>
        <h2>当前计数：{count}</h2>
        <button onClick={(e) => this.changeCount()}>+1</button>
      </div>
    )
  }

  // 3.组件挂载完成 依赖dom的操作可以放在这里 发送网络请求、订阅事件等
  componentDidMount() {
    console.log("h componentDidMount");
  }

  // 4.组件更新完成
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("h componentDidUpdate", prevProps, prevState, snapshot);
  }

  // 5.组件卸载
  componentWillUnmount() {
    console.log("h componentWillUnmount");
  }

  // 不常用的生命周期函数
  // 组件是否需要更新，返回true或者false，默认返回true
  shouldComponentUpdate() {
    console.log("h shouldComponentUpdate");
    return true
  }

  // 组件更新前的准备阶段 可以在这里获取更新前的状态或者dom信息，返回值会作为componentDidUpdate的第三个参数
  getSnapshotBeforeUpdate() {
    console.log("h getSnapshotBeforeUpdate");
    return {
      name: "Raven"
    }
  }

}

export default Hello