/*global FeedItem */

import React from 'react'
import FeedDomain from '../actions/feed_domain.jsx'
import FeedItem from './FeedItem.jsx'

const FeedList = ({props}) => (
      <div>
        {
          props.postItems.map(doc => {
            var comments = FeedDomain.getCommentsFromPostId(doc._id);

            return <FeedItem key={doc._id}
              { ...doc }
              comments={ comments }
              destroyPost={ doc.destroy }
            />;
          })
        }
        <button className='more-btn'
            onClick={props.incrementLimit}>
          Load More
        </button>
      </div>
    );
FeedList.propTypes = {
  comments: React.PropTypes.array,
};

export default FeedList
