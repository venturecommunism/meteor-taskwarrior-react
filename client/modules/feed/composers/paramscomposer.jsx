import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer'

import FeedDomain from '../actions/feed_domain.jsx'

export const depsMapper = (context, actions) => ({
  flags: actions.feed_actions.paramsflags(),
  context: () => context,
})

export default (component) => composeAll(
  useDeps(depsMapper)
)(component);
