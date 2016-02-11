// FeedData handles all data subscriptions and pushes data down to
// children via props.
//
// This component is a container or 'view controller' and will gather
// any data needed from the domain objects and handle subscriptions
//
// In a future version the children will be able to specify what fields
// they need, however currently they're stored in this component.

/* global FeedList, ReactMeteorData, FeedDomain */

//import CommentContainer from './CommentContainer.jsx'
//import {Posts, Comments} from '/lib/collections'
//import {Meteor} from 'meteor/meteor';
import FeedList from '../components/FeedList.jsx'
import {useDeps, composeWithTracker, composeAll} from 'mantra-core'

export const composerfn1 = ({context}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  const fields = {
    posts: {
      _id: true,
      description: true,
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
  let recordCount = {posts: 5}
//  sweetAlert("fields.posts", Object.keys(fields.posts))
//  const recordCount = this.state.recordCount;
  try {
    Meteor.subscribe("feed", fields, recordCount, null).ready()
  }
  catch (err) {
    sweetAlert("subscribe error: " + err + ", fields: " + Object.keys(fields.posts))
  }
  const posts = Collections.Posts.find().fetch();
  sweetAlert("success")
  onData(null, {posts});
};

export const composerfn2 = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const fields = {
          _id: true,
          createdAt: true,
          username: true,
          desc: true,
          postId: true,
  }
  postIds: FeedDomain.getPostCommentIds()
  if (Meteor.subscribe("feed", fields, postIds).ready()) {
    sweetAlert("ready")
    const comments = Collections.Comments.find().fetch();
    onData(null, {comments});
  }
};

export const depsMapper = ({Posts}, context, actions) => ({
  postIds: Collections.posts.find({}, {fields: {_id: 1}}).map(doc => doc._id),
  context: () => context
});

export default composeAll(
  composeWithTracker(composerfn1),
//  composeWithTracker(composerfn2),
//  useDeps(depsMapper),
useDeps(),
)(FeedList)
