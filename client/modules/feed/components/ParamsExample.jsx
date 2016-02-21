import React from 'react'
import FeedActions from '../actions/feed_actions'
import FeedDomain from '../actions/feed_domain.jsx'

export default ({projects}) => (
  <div className='params-example'>

    <button onClick={ FeedActions.filterByProjects }>
      Projects
    </button>

  </div>
)

