import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  handleSumbit(e) {
    // 1.阻止默认行为
    e.preventDefault()

    // 2.获取
    console.log(this.state.username);
    
    // 3.网络请求发数据

  }
  change(e) {
    this.setState({username: e.target.value})
  }
  render() {
    const {username} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSumbit(e)}>
          <label htmlFor="username">
            <input value={username} onChange={e => this.change(e)} type="text" name="username" id="username" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App