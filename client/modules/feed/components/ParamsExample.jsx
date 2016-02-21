import React from 'react'
import FeedActions from '../actions/feed_actions'
import FeedDomain from '../actions/feed_domain.jsx'

const ParamsExample = () => (
  <div className='params-example'>

    <button onClick={ FeedActions.filterByProjects }>
      Projects
    </button>

  </div>
)

export default ParamsExample
