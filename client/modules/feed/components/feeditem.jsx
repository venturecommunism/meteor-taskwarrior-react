import React from 'react'

import FeedItemHeader from './FeedItemHeader.jsx'
import FeedItemFooter from './FeedItemFooter.jsx'

export default ({task}) => (
  <div className='feed-item'>
    <FeedItemHeader task={task} />
    <div className='feed-item-description'>
      {task.description}
    </div>
    <div className='feed-item-entry'>
      {task.entry}
    </div>
    <div className='feed-item-status'>
      {task.status}
    </div>
    <div className='feed-item-uuid'>
      {task.uuid}
    </div>
    <FeedItemFooter task={task} />
  </div>
)
