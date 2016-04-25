import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, actions}, onData) => {
  const {LocalState} = context()
  const error = LocalState.get('SAVING_ERROR')
  onData(null, {error})

  // clearErrors when unmounting the component
  return actions.clearErrors
}

export const depsMapper = (context, actions) => ({
  actions: actions.feed,
  context: () => context
})

export default (component) => composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(component)

