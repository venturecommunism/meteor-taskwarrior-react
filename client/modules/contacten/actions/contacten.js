export const LOAD_CONTACTS_REQUEST = 'contacten/LOAD_CONTACTS_REQUEST'
export const LOAD_CONTACTS_SUCCESS = 'contacten/LOAD_CONTACTS_SUCCESS'
const LOAD_CONTACTS_FAIL = 'contacten/LOAD_CONTACTS_FAIL'

import { openSnackbar } from '../../snackbar/actions/snackbar'
import { loadContactFavorites } from '../../favorieten/actions/favorieten'
import { LOAD_FAVORITES_REQUEST, LOAD_FAVORITES_SUCCESS } from '../../favorieten/actions/favorieten'

const initialState = {
  contacts: [],
  page: 1,
  loadContactsRequest: false,
  loadContactsSuccess: false,
  loadContactsError: false,
  isSearching: false,
  searchResults: []
}

export function contactsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CONTACTS_REQUEST:
      return {
        ...state,
        loadContactsRequest: true,
        loadContactsSuccess: false,
        loadContactsError: false,
        isSearching: false,
        searchResults: []
      }
    case LOAD_CONTACTS_FAIL:
      return {
        ...state,
        loadContactsRequest: false,
        loadContactsSuccess: false,
        loadContactsError: true
      }
    case LOAD_CONTACTS_SUCCESS:
      return {
        ...state,
        loadContactsRequest: false,
        loadContactsSuccess: true,
        loadContactsError: false,
        contacts: action.contacts
      }
    default:
      return state
  }
}



export default {
/*
  async makeContactFavorite({Store, Meteor}, contactId: string, contactName: string): void {
    const { getState, dispatch } = Store

    const userId = Meteor.userId()

    try {
      await Meteor.promise('contacts.createFavorite', contactId, userId)

      openSnackbar(dispatch, `${contactName} toegevoegd aan uw favoriete contacten`, false)
      loadContactFavorites(dispatch, Meteor)
    } catch (e) {
      console.log('Error saving favorite', e)
    }
  },
  async listContacts({ Store }, order: string) : void {

    const { dispatch } = Store
    dispatch({type: LOAD_CONTACTS_REQUEST})
    try {
      const contacts = await Meteor.promise('contacten.list_paginated', 0, order)
      dispatch({type: LOAD_CONTACTS_SUCCESS, contacts})
    } catch (e) {
      dispatch({type: LOAD_CONTACTS_FAIL})
    }
  },
*/
  gotoProfile({ FlowRouter }, id: string) : void {
    FlowRouter.go(`/profiel/${id}`)
  }
}
