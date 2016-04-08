import {compose, composeAll, useDeps} from 'mantra-core'
import Component from '../components/Snackbar.jsx'

export const composer = ({ context }, onData) => {
  const { Store, Meteor } = context()
  const { snackbarReducer } = Store.getState()

  onData(null, {
    snackbarStore: Store.getState().snackbarReducer
  })
  return Store.subscribe(() => {
    onData(null, {
      snackbarStore: Store.getState().snackbarReducer
    })
  })
}

export const depsMapper = (context, actions) => ({
  closeSnackbar: actions.snackbar.closeSnackbar,
  context: () => context
})
export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Component)
