import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      pwd: '',
      isAgree: true,
      hobbies: [
        { value: 'a', text: 'a', isChecked: true },
        { value: 'b', text: 'b', isChecked: true },
        { value: 'c', text: 'c', isChecked: true }
      ],
    }
  }
  handleSumbit(e) {
    // 1.阻止默认行为
    e.preventDefault()

    // 2.获取
    console.log(this.state.username);
    console.log(this.state.pwd);
    console.log(this.state.hobbies.filter(item => item.isChecked).map(item => item.value));
    
    // 3.网络请求发数据

  }
  change(e) {
    const keyName = e.target.name
    this.setState({[keyName]: e.target.value})
  }
  changeA(e) {
    this.setState({isAgree: e.target.checked})
  }
  changeH(e, index) {
    const newHobbies = [...this.state.hobbies]
    newHobbies[index].isChecked = e.target.checked
    this.setState({
      hobbies: newHobbies
    })
  }
  render() {
    const {username, pwd, isAgree, hobbies} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSumbit(e)}>
          <label htmlFor="username">
            username<input value={username} onChange={e => this.change(e)} type="text" name="username" id="username" />
          </label>
          <label htmlFor="pwd">
            pwd<input value={pwd} onChange={e => this.change(e)} type="password" name="pwd" id="pwd" />
          </label>

          {/* checkbox */}
          <label htmlFor="agree">
            <label>
              <input id="agree" type="checkbox" checked={isAgree} onChange={e => this.changeA(e)} />同意
            </label>
          </label>

          {/* checkbox多选 */}
          <div>
            abc:
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={index}>
                    <input type="checkbox" id={item.value} checked={item.isChecked} onChange={e=> this.changeH(e, index)} />{item.text}
                  </label>
                )
              })
            }
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App