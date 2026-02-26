import {PureComponent} from 'react'
function enhanceCpn(OriginCpn) {
  class NewCpn extends PureComponent{
    constructor() {
      super()
      this.state = {
        info: {
          name: "xyz",
          age: 99
        }
      }
    }
    render() {
      return <OriginCpn {...this.props} {...this.state.info}/>
    }
  }
  return NewCpn
}

export default enhanceCpn