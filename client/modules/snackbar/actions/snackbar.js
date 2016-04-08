export const OPEN_SNACKBAR = 'snackbar/OPEN_SNACKBAR'
export const CLOSE_SNACKBAR = 'snacbar/OPEN_SNACKBAR'

const initialState = {
  open: false,
  error: false,
  message: ''
}
export function snackbarReducer(state : {open: boolean, error: boolean, message: string} = initialState,
                                action = {}) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return {
        ...state,
        open: true,
        error: action.error,
        message: action.message
      }
    case CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
        error: false,
        message: ''
      }
    default:
      return state
  }
}

export function openSnackbar(dispatch, message:string, error:boolean): void {
  dispatch({
    type: OPEN_SNACKBAR,
    message,
    error: error ? error : false
  })
}
export default {
  closeSnackbar({Store}): void {
    const { dispatch } = Store
    dispatch({
      type: CLOSE_SNACKBAR
    })
  }
}

