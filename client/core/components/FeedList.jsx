/* global FeedItem */

import {Posts, Comments} from '/lib/collections'
import Meteor from 'meteor/meteor'
import React from 'react'
import FeedDomain from '../actions/feed_domain.jsx'
import FeedItem from './FeedItem.jsx'

const FeedList = () => (
      <div>
        {
sweetAlert("getAllFeedPosts", FeedDomain.getAllFeedPosts().map(doc => doc))
/*
          FeedDomain.getAllFeedPosts.map(doc => {
            var comments = FeedDomain.getCommentsFromPostId(doc._id);

            return <FeedItem key={doc._id}
              { ...doc }
              comments={ comments }
              destroyPost={ doc.destroy }
            />;
          })
*/
        }
        <button className='more-btn'
            onClick={FeedDomain.incrementLimit}>
          Load More
        </button>
      </div>
    );
FeedList.propTypes = {
  comments: React.PropTypes.array,
};

export default FeedList
