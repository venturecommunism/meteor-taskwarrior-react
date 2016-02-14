/* global FeedItem */

import React from 'react'
import FeedDomain from '../actions/feed_domain.jsx'
//import FeedItem from './FeedItem.jsx'

const FeedList = ({posts}) => (


  <div className="feedlist">
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          {post.description}
          {post.comments}
          {post.uuid}
          {post.status}
          {post.entry}
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
