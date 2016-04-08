import equals from 'equals'

export const CONTACTS_SEARCH_REQUEST = 'contacten/CONTACTS_SEARCH_REQUEST'
export const CONTACTS_SEARCH_SUCCESS = 'contacten/CONTACTS_SEARCH_SUCCESS'
export const CONTACTS_SEARCH_RESET = 'contacten/CONTACTS_SEARCH_RESET'

const initialState = {
  isSearching: false,
  searchResults: [],
  searchActive: false,
  cachedResults: [],
}

export function contactsSearchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONTACTS_SEARCH_REQUEST:
      return {
        ...state,
        isSearching: true,
        searchActive: true
      }
    case CONTACTS_SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false,
        searchActive: true,
        searchResults: action.searchResults,
        cachedSearchResults: action.searchResults
      }
    case CONTACTS_SEARCH_RESET:
      return {
        ...state,
        isSearching: false,
        searchActive: false,
        searchResults: []
      }
    default:
      return state
  }
}

export function searchSuccess(dispatch, getState, searchResults: Array<Object>) {
  const { contactsSearchReducer } = getState()
  if (!equals(contactsSearchReducer.cachedSearchResults, searchResults)) {
    dispatch({
      type: CONTACTS_SEARCH_SUCCESS,
      searchResults
    })
  }
}

export default {
  searchUsers({UserSearch, Store}, searchText) {
    console.log(searchText)
    const { dispatch } = Store
    dispatch({type: CONTACTS_SEARCH_REQUEST})
    UserSearch.search(searchText)
  },
  resetUserSearch({ Store }) {
    const { dispatch } = Store
    dispatch({type: CONTACTS_SEARCH_RESET})
  },
}