import {
  useDeps, composeWithTracker, composeAll, compose
} from 'mantra-core'
import { LOAD_CONTACTS_REQUEST, LOAD_CONTACTS_SUCCESS } from '../actions/contacten'
import { CONTACTS_SEARCH_SUCCESS, searchSuccess } from '../actions/search'
import Component from '../components/contacten.jsx'
import equals from 'equals'

let oldSearchResults = []

export const composer = ({context, FlowRouter, page}, onData) => {
  const { Meteor, Store} = context()
  const { dispatch, getState } = Store

  const currentPage = Number(page) || 0
  Meteor.call('contacten.list_paginated', currentPage, 'Alfabetisch', (err, response) => {
    if (err) alert(err)
    else {
      dispatch({type: LOAD_CONTACTS_SUCCESS, contacts: response})
    }
  })
  onData(null, {
    contactsStore: getState().contactsReducer
  })
  return Store.subscribe(() => {
    onData(null, {
      contactsStore: getState().contactsReducer
    })
  })
}
export const searchComposer = ({context}, onData) => {
  const { Store, UserSearch} = context()
  const { dispatch, getState } = Store
  if (UserSearch.getStatus().loaded) {
    const searchResults = UserSearch.getData()
    console.log('TODO: CHECK FOR EQUALITY ON UPDATES, NOW UPDATES WRONGLY!')
    if (searchResults.length > 0) {
      searchSuccess(dispatch, getState, searchResults)
    }
    oldSearchResults = searchResults
  }
  onData(null, {
    contactsSearchStore: getState().contactsSearchReducer
  })
  return Store.subscribe(() => {
    onData(null, {
      contactsSearchStore: getState().contactsSearchReducer
    })
  })
}

const depsMapper = (context, actions) => ({
  listContacts: actions.contacten.listContacts,
  gotoProfile: actions.contacten.gotoProfile,
  sortContactList: actions.contacten.sortContactList,
  makeContactFavorite: actions.contacten.makeContactFavorite,
  context: () => context
})

export default composeAll(
  composeWithTracker(searchComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component)
