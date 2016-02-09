// FeedData handles all data subscriptions and pushes data down to
// children via props.
//
// This component is a container or 'view controller' and will gather
// any data needed from the domain objects and handle subscriptions
//
// In a future version the children will be able to specify what fields
// they need, however currently they're stored in this component.

/*global FeedList, ReactMeteorData, FeedDomain */

import FeedList from '../components/FeedList.jsx'
import {useDeps, composeWithTracker, composeAll} from 'mantra-core'

export const feedpostcomposer = ({context}, onData) => {

  const fields = {
          _id: true,
          desc: true,
          likeCount: true,
          commentCount: true,
          userName: true,
          createdAt: true,
          ownerId: true,
  }
  let recordCount = 5
//  const recordCount = this.state.recordCount;
  Meteor.subscribe("feed", fields, recordCount);

  postItems: FeedDomain.getAllFeedPosts()

  const {Meteor, Collections} = context()

  if (getMeteorData.feedReady()) {
    sweetAlert("ready")
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

export const feedcommentcomposer = ({context}, onData) => {

  const fields = {
          _id: true,
          createdAt: true,
          username: true,
          desc: true,
          postId: true,
  }
  const postIds = this.data.postIds;
  Meteor.subscribe("feed", fields, postIds);

  const {Meteor, Collections} = context()

  if (getMeteorData.feedReady()) {
    sweetAlert("ready")
    postIds: FeedDomain.getPostCommentIds()
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

export default composeAll(
  composeWithTracker(feedpostcomposer),
  composeWithTracker(feedcommentcomposer),
  useDeps()
)(FeedList)
