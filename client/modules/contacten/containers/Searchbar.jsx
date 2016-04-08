import {
  useDeps, composeWithTracker, compose, composeAll
} from 'mantra-core'
import Component from '../components/searchbar.jsx'

export const composer = ({context}, onData) => {
  const { Store } = context()

  onData(null, {
    isSearching: Store.getState().contactsSearchReducer.isSearching,
    searchActive: Store.getState().contactsSearchReducer.searchActive
  })
  return Store.subscribe(() => {
    onData(null, {
      isSearching: Store.getState().contactsSearchReducer.isSearching,
      searchActive: Store.getState().contactsSearchReducer.searchActive
    })
  })
}

export const depsMapper = (context, actions) => ({
  searchUsers: actions.search.searchUsers,
  resetUserSearch: actions.search.resetUserSearch,
  context: () => context
})
export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Component)
