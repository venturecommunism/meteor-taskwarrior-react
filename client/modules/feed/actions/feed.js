//make it so actions depending on tasks.findOne no longer do
import {tasks, TaskComments} from '/lib/collections'
import {Meteor} from 'meteor/meteor'

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
  upprojorcont() {
    var queryParams = FlowRouter.current().queryParams
    var id = queryParams.projects
    var superprojorcont = tasks.findOne({ super: {$exists: 1}, _id: id})
    var superid = superprojorcont ? superprojorcont.super : null
    FlowRouter.setQueryParams({ projects: superid })
    //sweetAlert("super", superid)
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
}

