import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Moment from 'moment';


class Home extends Component {
    render() {
        return(
            <div className="timer-app">
                <Helmet title="Timer" />
                <h1>Pomodoro Timer</h1>
                <div className="buttons-holder">
                    <button onClick={this.newTimer.bind(this, 1)}>1 min</button>
                    <button onClick={this.newTimer.bind(this, 5)}>5 min</button>
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
