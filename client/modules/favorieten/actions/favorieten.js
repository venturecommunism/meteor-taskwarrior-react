export const LOAD_FAVORITES_REQUEST = 'contacten/LOAD_FAVORITES_REQUEST'
export const LOAD_FAVORITES_SUCCESS = 'contacten/LOAD_FAVORITES_SUCCESS'
export const LOAD_FAVORITES_FILES_SUCCESS = 'contacten/LOAD_FAVORITES_FILES_SUCCESS'

const initialState = {
  contacts: [],
  documents: [],
  loading: false
}

export function favorietenReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_FAVORITES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOAD_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.favorites
      }
    case LOAD_FAVORITES_FILES_SUCCESS:
      return {
        ...state,
        loading: false,
        documents: action.documents
      }
    default:
      return state
  }
}

export function loadContactFavorites(dispatch, Meteor) {
  const userId = Meteor.userId()
  Meteor.call('contacten.getFavorites', userId, (err, response) => {
    if (err) console.log('Error', err)
    else {
      dispatch({
        type: LOAD_FAVORITES_SUCCESS,
        favorites: response
      })
    }
  })
}

export function loadKenniscentrumFavorites(dispatch, Meteor) {
  const userId = Meteor.userId()
  dispatch({type: LOAD_FAVORITES_REQUEST})

  Meteor.call('kenniscentrum.getFavorites', userId, (err, response) => {
    if (err) console.log('Error!', err)
    else {
      console.log('Success')
      dispatch({type: LOAD_FAVORITES_FILES_SUCCESS, documents: response})
    }
  })
}