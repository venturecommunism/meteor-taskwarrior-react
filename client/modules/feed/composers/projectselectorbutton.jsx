import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer'

export const depsMapper = (context, actions) => ({
  buttontest: actions.feed_actions.test,
  context: () => context,
})

export default (component) => composeAll(
  useDeps(depsMapper)
)(component);
