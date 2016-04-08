export const TOGGLE_OVERLAY = 'layout/TOGGLE_OVERLAY'

const initialState = {
  overlayIsOpened: false,
  typeOfOverlay: undefined
}

export function layoutReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return {...state, overlayIsOpened: !state.overlayIsOpened, typeOfOverlay: action.typeOfOverlay}
    default:
      return state
  }
}

export default {
  toggleOverlay({ context, Store }, type) {
    //const { Store } = context()

    Store.dispatch({
      type: TOGGLE_OVERLAY,
      typeOfOverlay: type
    })
  }
}