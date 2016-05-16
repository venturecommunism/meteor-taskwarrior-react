import React, {Component} from 'react'
import Moment from 'moment'
import Sound from 'react-sound'

class Counter extends Component{
  componentDidMount() {
    const {set, end_timer} = this.props
    const timer = setInterval(() => {
      const { _id, time, counting } = this.props
      if(time > 0){
        if (counting) set(_id, time)
      } else if (counting) {
        const { _id, time, counting} = this.props
        //clearInterval(timer)
        end_timer(_id)
      }
    }, 1000)
  }

  render() {
    const {_id, counting, time, ended} = this.props
    return (
      <div className="counter-block">
        <div className="timer-holder">
          <h3 className="timer-component">{ Moment.utc(time).format('mm:ss') }</h3>
        </div>

        <button onClick={this._startTimer.bind(this)}>{ (counting) ? 'Pause' : 'Start' }</button>

        <button onClick={this._resetTimer.bind(this)}>Reset</button>
        { (ended) ? this._renderSound() : null }
        { (ended) ? this._newNotification() : null }
      </div>
    )
  }

  _resetTimer() {
    const {_id, reset_timer} = this.props
    reset_timer(_id)
  }

  _startTimer() {
    const {_id, counting, set_counting} = this.props
    let isCounting = !counting
    set_counting(_id, isCounting)
  }

  _newNotification() {
    let description = 'Timer ended' 
    let options = {body: description}
    let n = new Notification(description, options)
  }

  _renderSound() {
    return (
      <Sound
        url="/assets/alarm.mp3"
        playStatus={ Sound.status.PLAYING }
        playFromPosition={0}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying} />
    )
  }
}

export default Counter
