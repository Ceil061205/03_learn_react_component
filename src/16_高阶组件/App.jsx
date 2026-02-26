import React, { PureComponent } from 'react'
import themeContext from './context/theme_context'
import Product from './pages/Product'
export class App extends PureComponent {
  render() {
    return (
      <div>
        <themeContext.Provider value={{color: 'red'}}>
          <Product/>
        </themeContext.Provider>
      </div>
    )
  }
}

export default App