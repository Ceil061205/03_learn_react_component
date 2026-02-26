import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.msg !== nextProps.msg)
  //     return true
  //   return false
  // }

  render() {
    console.log('h render');
    
    return (
      <div>Home:{this.props.msg}</div>
    )
  }
}

export default Home