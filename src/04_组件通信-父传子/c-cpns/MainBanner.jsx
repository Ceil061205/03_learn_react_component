import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { banners, title } = this.props
    return (
      <div>
        <h2>MainBanner {title}</h2>
      <ul>
          {
            banners.map((banner, index) => (
              <li key={index}>{banner}</li>
            ))
          }
      </ul>
      </div>
    )
  }
}

// 类型限制
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string
}
// 默认值
MainBanner.defaultProps = {
  title: '轮播图',
  banners: []
}
export default MainBanner