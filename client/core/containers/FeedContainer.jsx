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

export const feedcomposer = ({context}, onData) => {
 const {Meteor, Collections} = context();
  if (Meteor.subscribe('feed').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

export default composeAll(
  composeWithTracker(feedcomposer),
  useDeps()
)(FeedList)
