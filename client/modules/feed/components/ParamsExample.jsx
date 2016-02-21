/*global FeedDomain, FeedActions */
/* jshint maxlen: false */

import React from 'react'
import FeedActions from '../actions/feed_actions'
import FeedDomain from '../actions/feed_domain.jsx'

const ParamsExample = () => (
      <div className='params-example'>
        <h4>Reactive Query Params</h4>

        <p>
          FlowRouter provides a reactive API that 
          allows for automatic render updates when the
          data changes
        </p>

        <button onClick={ FeedActions.filterByProjects }>
          Projects
        </button>

        <div className="step-container">
          <b>Step:</b> { FeedDomain.getStepParam() } <br/><br/>
        </div>

        <button onClick={ FeedActions.incrementStepParam }> 
          Press to Increment Step Query Params
        </button>
      </div>
)

export default ParamsExample

/*
import React from 'react'

this.ParamsExample = React.createClass({
  handleClick() {
    FeedActions.incrementStepParam();
  },

  render() {
    var stepNumber = FeedDomain.getStepParam();
    return (
      <div className='params-example'>
        <h4>Reactive Query Params</h4>

        <p>
          FlowRouter provides a reactive API that will
          allows for automatic render updates when the
          data changes
        </p>

        <div className="step-container">
          <b>Step:</b> { stepNumber } <br/><br/>
        </div>

        <button onClick={ this.handleClick }>
          Press to Increment Step Query Params
        </button>
      </div>
    );
  }
});
*/
