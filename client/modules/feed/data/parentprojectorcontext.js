import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer'

import FeedDomain from '../actions/feed_domain'

export const depsMapper = (context, actions) => ({
  task: {},
  buttonpress: actions.feed_actions.upprojorcont,
  buttontext: "Up one level",
  context: () => context,
})

export default (component) => composeAll(
  useDeps(depsMapper)
)(component);
