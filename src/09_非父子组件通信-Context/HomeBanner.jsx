import ThemeContext from "./context/themeContext"
function HomeBanner() {
  return (
    <div className='home-banner'>
      <h1>HomeBanner</h1>
      <ThemeContext.Consumer>
        {
          (value) => {
            return <h2 style={{color: value.color, fontSize: value.fontSize}}>这是HomeBanner组件</h2>
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
}
export default HomeBanner