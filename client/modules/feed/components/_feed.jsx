import React from 'react'

import FeedItemHeader from './FeedItemHeader.jsx'
import FeedItemFooter from './FeedItemFooter.jsx'

export default ({collection}) => (
  <div className='feed-wrapper'>
    <h3>Tasks collection</h3>
    <ul>
      {collection.map(task => (
        <li key={task._id}>
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
        </li>
      ))}
    </ul>

    <button className='more-btn'> 
      Load More
    </button>
  </div>
);

/*
FeedItem.propTypes = {
  description: React.PropTypes.string.isRequired,
  taskcomments: React.PropTypes.array.isRequired,
  uuid: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
  entry: React.PropTypes.string.isRequired,
};

export default FeedItem
*/

