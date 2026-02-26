import React, { Component } from 'react'
import eventBus from './utils/event-bus';

export class HomeBanner extends Component {
  preClick() {
    console.log('preClick');
    eventBus.emit('bannerPrev', 'xyz');
  } 
  nextClick() {
    console.log('nextClick');
    eventBus.emit('bannerNext', 'abc');
  }
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={() => this.preClick()}>上一个</button>
        <button onClick={() => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner