import {useDeps, composeWithTracker, composeAll} from 'mantra-core'
import Component from '../components/Sidebar/sidebar.jsx'

import { LOAD_FAVORITES_REQUEST, LOAD_FAVORITES_FILES_SUCCESS } from '../../favorieten/actions/favorieten'

export const composer = ({ context, Meteor}, onData) => {
  const { Store } = context()

  onData(null, {
    layoutStore: Store.getState().layoutReducer,
    currentFile: Store.getState().kennisCentrumReducer.currentFile
  })

  return Store.subscribe(() => {
    onData(null, {
      layoutStore: Store.getState().layoutReducer,
      currentFile: Store.getState().kennisCentrumReducer.currentFile
    })
  })
}

export const subscriptionComposer = ({context}, onData) => {
  const { Meteor, Collections, Store } = context()
  const userId = Meteor.userId()

  const { dispatch, getState } = Store
  dispatch({type: LOAD_FAVORITES_REQUEST})

  Meteor.call('kenniscentrum.getFavorites', userId, (err, response) => {
    if (err) console.log('Error!', err)
    else {
      console.log('Success')
      dispatch({type: LOAD_FAVORITES_FILES_SUCCESS, documents: response})
    }
  })

  onData(null, {
    favorietenStore: getState().favorietenReducer
  })

  return Store.subscribe(() => {
    onData(null, {
      favorietenStore: getState().favorietenReducer
    })
  })
}
export const depsMapper = (context, actions) => ({
  toggleOverlay: actions.layout.toggleOverlay,
  context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(subscriptionComposer),
  useDeps(depsMapper)
)(Component)
