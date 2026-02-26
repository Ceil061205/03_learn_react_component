import React, { PureComponent } from 'react'
import enhanceCpn from './hoc/enhanced_props'
import About from './pages/About'

const Home = enhanceCpn(function(props) {
  return <h2>home-{props.name}-{props.age}</h2>
})

function Profile(props) {
  return <h2>Profile</h2>
}

const Hello = enhanceCpn(function(props) {
  return <h2>hello-{props.name}-{props.age}-{props.list}</h2>
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <About/>
        <Hello list={['1sss','xxxx']} />
        <Home />
        <Profile/>
      </div>
    )
  }
}

export default App