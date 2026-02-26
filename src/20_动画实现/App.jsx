import React, { PureComponent } from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.css'
export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  change() {
    this.setState({isShow: !this.state.isShow})
  }
  render() {
    const {isShow} = this.state
    return (
      <div>
        {/* {isShow && <h2>1111</h2>} */}
        <button onClick={e => this.change()}>show</button>
        <CSSTransition unmountOnExit={true} timeout={2000} in={isShow} classNames="xyz">
          <h2>hhh</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default App