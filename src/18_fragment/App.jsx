import React, { PureComponent, Fragment } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      list: [
        { title: 'xyz', num: 1 },
        { title: 'xy2z', num: 21 },
      ]
    }
  }
  render() {
    return (
      // 一个无意义的根 类似template
      // <Fragment>App</Fragment>
      // 语法糖 有key的时候不能省略
      <>
        11
        {
          this.state.list.map(item => {
            return (
              <Fragment key={item}>

              </Fragment>
            )
          }
          )
        }
      </>
    )
  }
}

export default App