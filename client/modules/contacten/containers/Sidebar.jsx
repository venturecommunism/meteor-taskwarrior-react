import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core'
import Component from '../components/Sidebar/Sidebar.jsx'

import { LOAD_FAVORITES_REQUEST, LOAD_FAVORITES_SUCCESS } from '../../favorieten/actions/favorieten'

export const subscriptionComposer = ({context}, onData) => {
  const { Meteor, Collections, Store } = context()
  const userId = Meteor.userId()

  const { dispatch, getState } = Store
  dispatch({type: LOAD_FAVORITES_REQUEST})

  Meteor.call('contacten.getFavorites', userId, (err, response) => {
    if (err) console.log('Error!', err)
    else {
      console.log('Success')
      dispatch({type: LOAD_FAVORITES_SUCCESS, favorites: response})
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
  gotoProfile: actions.contacten.gotoProfile,
  context: () => context
})

export default composeAll(
  composeWithTracker(subscriptionComposer),
  useDeps(depsMapper)
)(Component)
