import PostList from '../components/postlist.jsx'
//import FeedList from '../../../core/components/FeedList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import FeedDomain from '../../../core/actions/feed_domain.jsx'

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  sweetAlert("title", "test")
  const fields = {
    posts: {
      _id: true,
      title: true,
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
  sweetAlert("fields.posts", Object.keys(fields.posts))
  sweetAlert("FeedDomain", Object.keys(FeedDomain))
  const feedposts = FeedDomain.getAllFeedPosts()
  sweetAlert("feedposts", feedposts)
  const postIds = FeedDomain.getPostCommentIds()
  sweetAlert("postIds", postIds)
  if (Meteor.subscribe("feed", fields, recordCount, postIds).ready()) {
    const posts = Collections.Posts.find().fetch();
    sweetAlert("success", Object.keys(posts[1]))
    onData(null, {posts});
  }


/*
  const fields = {
    posts: {
      _id: true,
      title: true,
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


  const {Meteor, Collections} = context();
  if (Meteor.subscribe('feed', fields, recordCount, null).ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
*/
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostList);
