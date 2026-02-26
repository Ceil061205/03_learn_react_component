import React, { PureComponent } from 'react'

export class Hello extends PureComponent {
  // 不推荐的生命周期会报错 严格模式下 使用过时的api报错 检测意外的副作用 生命周期会执行两次
  // 检测不安全代码
  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default Hello