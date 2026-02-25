import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/themeContext'


export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        name: 'Raven',
        age: 18
      }
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <h1>App组件</h1>
        {/* 1 */}
        {/* <Home info={info.name} age={info.age} /> */}
        {/* <Home {...info} /> */}

        {/* 2.使用Context传递数据 */}
        <ThemeContext.Provider value={
          {color: 'red', fontSize: '30px'}
        }>
          <Home {...info} />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App