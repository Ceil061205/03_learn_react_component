import themeContext from "../context/theme_context"
function withTheme(OrginCpn) {
  return props => {
    return (
        <themeContext.Consumer>
          {
            value => {
              return <OrginCpn {...value} {...props}/>
            }
          }
        </themeContext.Consumer>
    )
  }
}
export default withTheme