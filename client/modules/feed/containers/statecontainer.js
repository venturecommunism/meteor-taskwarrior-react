import { composeWithTracker, composeAll } from 'mantra-core'
import { useDeps } from '/lib/helpers/usedeps'

const collectionComposer = ({ context, actions }, onData) => {
  const { LocalState } = context()

  const { states } = actions

  const state1 = states().st1 ? LocalState.get(states().st1) : null

  const sendData = () => {
    onData(null, {
      state1,
    })
    // clearStates when unmounting the component
    return states.st1 ? states.st1.clearStates : null
  }

  sendData()
}

export default (actionset, component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(actionset)
)(component)
