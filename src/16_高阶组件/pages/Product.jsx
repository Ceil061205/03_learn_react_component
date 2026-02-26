import React, { PureComponent } from 'react'
import themeContext from '../context/theme_context'
import withTheme from '../hoc/with_theme'
// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>Product
//         <themeContext.Consumer>
//           {
//             value => {
//               return <h2>{value.color}</h2>
//             }
//           }
//         </themeContext.Consumer>
//       </div>
//     )
//   }
// }

class Product extends PureComponent{
  render() {
    return <h2>product:{this.props.color}</h2>
  }
}
export default withTheme(Product)