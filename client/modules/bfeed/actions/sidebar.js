export const SELECT_PROJECTORCONTEXT = 'bfeed/SELECT_PROJECTORCONTEXT'

const initialState = {
  inboxIsOpened: true,
  atTopLevel: true,
  taskMode: 'definework',
  selectedProjectOrContext: undefined,
}

export function bfeedSidebarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_PROJECTORCONTEXT:
      return {
        ...state,
        selectedProjectOrContext: action.selectedProjectOrContext,
      }
    default:
      return state
  }
}

export default {
  query() {

  function selector() {

    // get the URL contents
    var queryParams = FlowRouter.current().queryParams
    //sweetAlert("queryParams", queryParams)
    //sweetAlert("queryParams.projects", queryParams.projects)

    var query = {}

    switch (JSON.stringify(queryParams)) {
      case "{}":
        //sweetAlert("case", "{}")
        query = { type : 'project', project: {$exists: 0} }
        break
      default:
        query = { type: 'project', project: { $exists: 0} }
    }

    switch (Boolean(queryParams.projects && queryParams.type)) {
      case (false):
        break
      default:
        var project = queryParams.projects
        var type = queryParams.type
        query = { type: type, project: project }
    }

    switch (Boolean(queryParams.contexts && queryParams.type)) {
      case (false):
        break
      default:
        var context = queryParams.contexts
        var type = queryParams.type
        query = { type: type, context: context }
    }

    switch (queryParams.type) {
      case "context":
        query.type = 'context'
        break
    }

    //sweetAlert("query.feedquery.project", query.feedquery.project)
    return query
  }

    return {
      name: 'sidebar',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: { taskspending: 10000 },
    }
  },
  buttontext() {
    return "Default button text"
  },
  flags() {
    var queryParams = FlowRouter.current().queryParams
    var paramsflags = {}
    paramsflags.context = (queryParams.type == 'context') ? 'blueflag' : null
    paramsflags.project = (queryParams.type == 'project') ? 'blueflag' : null
    paramsflags.definesome = (queryParams.mode == null) ? 'redflag' : null
    paramsflags.dodefined = (queryParams.mode == 'do') ? 'greenflag' : null
    paramsflags.clearall = (JSON.stringify(queryParams) == '{}' ) ? 'blueflag' : null
    return paramsflags
  },
  selectedProjectOrContext({ context, Store }, e) {
    var id = e.target.id
    if (FlowRouter.getQueryParam('type') == 'project') {
      FlowRouter.setQueryParams({ projects: id, type: 'project' })
    } else {
      FlowRouter.setQueryParams({ contexts: id, type: 'context' })
    }

    Store.dispatch({
      type: SELECT_PROJECTORCONTEXT,
      selectedProjectOrContext: id
    })
  },
  clearFilters() {
    FlowRouter.go('/bfeed')
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

