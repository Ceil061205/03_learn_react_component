import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainList from './MainList'
// import axios from 'axios'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Raven',
      banners: ['banner1', 'banner2', 'banner3'],
      lists: ['list1', 'list2', 'list3']
    }
  }
  render() {
    return (
      <div>
        <MainBanner banners={this.state.banners} title="轮播图" />
        <MainBanner />
        <MainList lists={this.state.lists} />
      </div>
    )
  }
  // 模拟发送ajax请求获取数据
  // componentDidMount() {
  //   axios.get('/api/banners').then(res => {
  //     this.setState({
  //       banners: res.data
  //     })
  //   })
  // }
}

export default Main