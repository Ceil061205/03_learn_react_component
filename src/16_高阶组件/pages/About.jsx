import React, { PureComponent } from 'react'
import enhanceCpn from '../hoc/enhanced_props'

export class About extends PureComponent {
  render() {
    return (
      <div>About</div>
    )
  }
}

export default enhanceCpn(About)