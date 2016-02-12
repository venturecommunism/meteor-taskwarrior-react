/* global FeedItem */

import {Posts, Comments} from '/lib/collections'
import Meteor from 'meteor/meteor'
import React from 'react'
import FeedDomain from '../actions/feed_domain.jsx'
//import FeedItem from './FeedItem.jsx'

const FeedList = ({posts}) => (
      <div>
        <button className='more-btn'
            onClick={FeedDomain.incrementLimit}>
          Load More
        </button>
      </div>
    );
//FeedList.propTypes = {
//  comments: React.PropTypes.array,
//};

export default FeedList
