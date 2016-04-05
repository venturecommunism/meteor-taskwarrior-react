import React from 'react'
import FeedDomain from '../actions/feed_domain'

import ProjCont from './projorcont.jsx'

export default ({task}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{task.username}</div>
    </div>

    <ProjCont task={task} />

  </div>
);
