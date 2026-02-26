import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      pwd: ''
    }
  }
  handleSumbit(e) {
    // 1.阻止默认行为
    e.preventDefault()

    // 2.获取
    console.log(this.state.username);
    console.log(this.state.pwd);
    
    // 3.网络请求发数据

  }
  change(e) {
    const keyName = e.target.name
    this.setState({[keyName]: e.target.value})
  }
  render() {
    const {username, pwd} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSumbit(e)}>
          <label htmlFor="username">
            username<input value={username} onChange={e => this.change(e)} type="text" name="username" id="username" />
          </label>
          <label htmlFor="pwd">
            pwd<input value={pwd} onChange={e => this.change(e)} type="password" name="pwd" id="pwd" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App