import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-bar2'

export class App extends Component {
  render() {
    const btn = <button>按钮</button>
    return (
      <div>
        <NavBar>
          {/*放多个的时候才是数组 一个就直接拿 */}
          <button>按钮</button>
          {/* <h2>hhhh</h2>
          <span>span</span> */}
        </NavBar>
        <NavBar2 leftSlot={btn} centerSlot={<h2>中间标题</h2>} rightSlot={<button>右侧按钮</button>}/>
      </div>
    )
  }
}

export default App