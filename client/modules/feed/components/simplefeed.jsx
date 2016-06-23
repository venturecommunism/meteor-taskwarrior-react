import React from 'react'

import FeedItem from './feeditem.jsx'

export default ({...queryParams, data}) => (
  <div className='simplefeed-wrapper'>
    {data.map(task => (
      <div key={task._id}>
        <FeedItem {...queryParams} data={task} />
      </div>
    ))}
  </div>
)
