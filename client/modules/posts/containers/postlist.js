import PostList from '../components/postlist.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {

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
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostList);
