export const SELECT_PROJECT = 'feed/SELECT_PROJECT'

const initialState = {
  inboxIsOpened: true,
  atTopLevel: true,
  taskMode: 'definework', 
  selectedProject: undefined,
}

export function feedReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.selectedProject,
      }
    default:
      return state
  }
}

export default {
  selectedProject({context, Store}, e) {
    // const { Store } = context()

    var id = e.target.id

    sweetAlert("id", id)

    Store.dispatch({
      type: SELECT_PROJECT,
      selectedProject: id
    })
  }
}

