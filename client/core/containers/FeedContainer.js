// FeedData handles all data subscriptions and pushes data down to
// children via props.
//
// This component is a container or 'view controller' and will gather
// any data needed from the domain objects and handle subscriptions
//
// In a future version the children will be able to specify what fields
// they need, however currently they're stored in this component.

/* global FeedList, ReactMeteorData, FeedDomain */

import {Posts, Comments} from '/lib/collections'
import Feed from '../components/Feed.jsx'
import FeedDomain from '../actions/feed_domain.jsx'
import {useDeps, composeWithTracker, composeAll} from 'mantra-core'

export const composerfn1 = ({context}, onData) => {
  const {Meteor, Collections, Tracker} = context()

  const fields = {
    posts: {
      _id: true,
      description: true,
      uuid: true,
      status: true,
      entry: true,
      likecount: true,
      commentcount: true,
      username: true,
      created: true,
      owner: true,
    },
    postComments: {
      _id: true,
      created: true,
      username: true,
      description: true,
      post: true,
    }
  }

  let recordCount = {posts: 20}

  // sweetAlert("fields.posts", Object.keys(fields.posts))
  // sweetAlert("FeedDomain", Object.keys(FeedDomain))
  const feedposts = FeedDomain.getAllFeedPosts()
  // sweetAlert("feedposts", feedposts)
  const postIds = FeedDomain.getPostCommentIds()
  // sweetAlert("postIds", postIds)
  if (Meteor.subscribe("feed", fields, recordCount, postIds).ready()) {
    // sweetAlert("subscribe error: " + err + ", fields: " + Object.keys(fields.posts))
    const posts = Collections.Posts.find().fetch();
    // sweetAlert("success", Object.keys(posts[1]))
    onData(null, {posts});
  }
};

export default composeAll(
  composeWithTracker(composerfn1),
  useDeps()
)(Feed)
