import {
  useDeps, composeWithTracker, composeAll, compose
} from 'mantra-core'
import { LOAD_PROFILE, LOAD_PROFILE_REQUEST } from '../actions/profiel'
import Component from '../profiel.jsx'

export const composer = ({context, userId},onData) => {
  const { Meteor, Collections, Tracker, Store} = context()
  const { dispatch, getState } = Store


  dispatch({type: LOAD_PROFILE_REQUEST})
  //TODO: reactive and non-reactive depening on own user profile
  if (Meteor.subscribe('profile.show', userId).ready()) {
    const selector = {
      _id: userId
    }
    const profile = Meteor.users.findOne(selector)
    dispatch({type: LOAD_PROFILE, profile })
  }
  onData(null, {
    profileStore: getState().profileReducer
  })
  return Store.subscribe(() => {
    onData(null, {
      profileStore: getState().profileReducer
    })
  })
}
export const depsMapper = (context, actions) => ({
  context: () => context
})
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component)