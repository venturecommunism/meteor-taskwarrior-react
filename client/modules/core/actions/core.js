export const SELECT_CONTAINER = 'core/SELECT_CONTAINER'

const initialState = {
  typeOfContainer: 'feed'
}

export function coreReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_CONTAINER:
      return {...state, typeOfContainer: action.typeOfContainer}
    default:
      return state
  }
}

export default {
  selectContainer({ context, Store }, type) {
    //const { Store } = context()

    Store.dispatch({
      type: SELECT_CONTAINER,
      typeOfContainer: type
    })
  }
}

