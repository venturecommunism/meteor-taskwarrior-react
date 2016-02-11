/* global FeedItemHeader, FeedItemFooter, FeedComments */

import React from 'react'

const FeedItem = ({props}) => (
  <div className='feed-item'>
    <FeedItemHeader {...props} />

    <div className='feed-item-description'>
      {props.description}
    </div>

    <div className='feed-item-entry'>
      {props.entry}
    </div>

    <div className='feed-item-status'>
      {props.status}
    </div>

    <div className='feed-item-uuid'>
      {props.uuid}
    </div>

    <FeedItemFooter {...props} />

    <FeedComments {...props} />
  </div>
);
FeedList.propTypes = {
  description: React.PropTypes.string.isRequired,
  comments: React.PropTypes.array.isRequired,
  uuid: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
  entry: React.PropTypes.string.isRequired,
};

export default FeedItem

