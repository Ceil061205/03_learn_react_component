import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: ""
    }

  }
  change(e) {
    console.log(e.target.value);
    this.setState({username: e.target.value})
  }
  render() {
    const { username } = this.state
    
    return (
      <div>
        {/* 受控组件 绑定value的 */}
        <input type="text" value={username} onChange={e => this.change(e)} />
        {/* 非受控组件 */}
        <input type="text" name="" id="" />
        <h2>user:{username}</h2>
      </div>
    )
  }
}
