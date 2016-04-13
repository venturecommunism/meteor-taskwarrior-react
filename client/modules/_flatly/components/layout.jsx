import React from 'react';

// import Navheader from './navigation2.jsx';
import Navheader from './navheader.jsx';

export default class extends React.Component {

  render() {
    return (
      <div>

        <Navheader>
          <ConnectStatus lang={{
                              waiting: 'Waiting for server, system will reconnect in ',
                              waitingAfter: ' seconds.',
                              connecting: 'Connecting...',
                              offline: 'Offline! Please check your network.',
                              retryNow: 'Reconnect Now!'
                              }} />
          {this.props.links ? this.props.links() : ''}
        </Navheader>

        <div className="container">


            {this.props.content()}


        </div>

      </div>
    );
  }
}
