import React from 'react'
import FeedDomain from '../actions/feed_domain'

import ProjCont from './projorcont.jsx'

export default ({data}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{data.username}</div>
    </div>

    <ProjCont data={data} />

  </div>
);
