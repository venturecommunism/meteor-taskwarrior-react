import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Moment from 'moment';

class Home extends Component {
  componentDidMount() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
      })
    }
  }

    render() {
        return(
            <div className="timer-app">
                <Helmet title="Timer" />
                <h1>Pomodoro Timer</h1>
                <div className="buttons-holder">
                    <button onClick={this.newTimer.bind(this, 10)}>10 sec</button>
                    <button onClick={this.newTimer.bind(this, 60)}>1 min</button>
                    <button onClick={this.newTimer.bind(this, 300)}>5 min</button>
                    <button onClick={this.newTimer.bind(this, 600)}>10 min</button>
                    <button onClick={this.newTimer.bind(this, 900)}>15 min</button>
                </div>

                <div className="pomodoros-list">
                    {console.log(this.props)}
                </div>
            </div>
        );
    }

    newTimer(type, e) {
        const {create} = this.props;
        create(type);
    }
}

export default Home;
