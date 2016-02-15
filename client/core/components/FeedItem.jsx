/* global FeedItemHeader, FeedItemFooter, FeedComments */

import React from 'react'
import FeedList from './FeedList.jsx'
import FeedItemHeader from './FeedItemHeader.jsx'
import FeedItemFooter from './FeedItemFooter.jsx'

const FeedItem = ({post}) => (
  <div className='feed-item'>
    <FeedItemHeader post={post} />

    <div className='feed-item-description'>
      {post.description}
    </div>

    <div className='feed-item-entry'>
      {post.entry}
    </div>

    <div className='feed-item-status'>
      {post.status}
    </div>

    <div className='feed-item-uuid'>
      {post.uuid}
    </div>

    <FeedItemFooter post={post} />
  </div>
);
FeedItem.propTypes = {
  description: React.PropTypes.string.isRequired,
  comments: React.PropTypes.array.isRequired,
  uuid: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
  entry: React.PropTypes.string.isRequired,
};

export default FeedItem

