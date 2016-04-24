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
  selectedProject({ context, Store }, e) {
    //const { Store } = context()

    var id = e.target.id
    FlowRouter.setQueryParams({ projects: id, type: 'project' })

    Store.dispatch({
      type: SELECT_PROJECT,
      selectedProject: id
    })
  },
  assignProject({ context, Store }, e) {
    var id = e.target.parentNode.id
    var queryParams = FlowRouter.current().queryParams
    switch (queryParams.type) {
      case 'project':
        var data = {super: e.target.id, workflow: {status: "project", workflow: ["project"]}}
        break
      default:
        var data = {project: e.target.id, workflow: {status: "project", workflow: ["project"]}}
    }
    Meteor.call('tasks.update', data, id)
  },
  filterAllProjects() {
    var currentState = FlowRouter.getQueryParam('type')
    if (currentState != 'project') {
      FlowRouter.setQueryParams({ type: 'project' })
    } else {
      FlowRouter.setQueryParams({ type: null })
    }
  },
  filterAllContexts() {
    var currentState = FlowRouter.getQueryParam('type')
    if (currentState != 'context') {
      FlowRouter.setQueryParams({ type: 'context' })
    } else {
      FlowRouter.setQueryParams({ type: null })
    }
  },
  filterDefineSomeWork() {
    var currentState = FlowRouter.getQueryParam('mode')
    if (currentState) {
      FlowRouter.setQueryParams({ mode: null })
    }
  },
  filterDoDefinedWork() {
    var currentState = FlowRouter.getQueryParam('mode')
    if (!currentState) {
      FlowRouter.setQueryParams({ mode: 'do' })
    }
  },
  setProjectOrContext({ context, Store }, e) {
    const _id = e.target.className
    sweetAlert("projorcont", _id)
    const projorcont = e.target.value
    const data = {type: projorcont}
    Meteor.call('tasks.update', data, _id)
    // {_id: _id}, {$set: {type: projorcont}})
  },
}

