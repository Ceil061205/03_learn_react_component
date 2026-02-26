import React, { PureComponent, StrictMode } from 'react'
import Hello from './pages/Hello'
import Home from './pages/Home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Hello />
        </StrictMode>
        <Home/>
      </div>
    )
  }
}

export default App