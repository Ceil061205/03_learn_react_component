import React, { Component } from 'react'
import HomeProduct from './HomeProduct'
import HomeBanner from './HomeBanner'
export class Home extends Component {
  render() {
    const { name, age } = this.props
    // 可以用{...this.props}的方式传递所有属性 一层层传递下去 但是不建议这么做 因为不清晰
    return (
      <div>
        <h2>Home组件</h2>
        <p>姓名: {name}</p>
        <p>年龄: {age}</p>
        <HomeProduct />
        <HomeBanner />
      </div>
    )
  }
}

export default Home