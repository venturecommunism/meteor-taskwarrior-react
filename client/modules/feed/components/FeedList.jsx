/* global FeedItem */

import React from 'react'
import FeedDomain from '../actions/feed_domain.jsx'
import FeedItem from './FeedItem.jsx'

const FeedList = ({tasks}) => (


  <div className="feedlist">
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <FeedItem task={task} />
        </li>
      ))}
    </ul>
        <button className='more-btn'
            onClick={FeedDomain.incrementLimit}>
          Load More
        </button>
      </div>
    );

export default FeedList
