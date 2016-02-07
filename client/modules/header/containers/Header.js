/*
import PostList from '../components/postlist.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostList);
*/

import Header from '../components/Header.jsx'
import {composeWithTracker} from 'react-komposer'

// the following code originally comes from a componentDidMount
export const composer = ({context}, onData) => {
  // insert Blaze login buttons, see this if you do this a lot
  // https://gist.github.com/emdagon/944472f39b58875045b6
  var div = document.getElementById('loginContainer');
  Blaze.renderWithData(Template.loginButtons, {align: 'right'}, div);
}

export default composeWithTracker(composer)(Header)
