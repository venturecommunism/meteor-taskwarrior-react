export const SELECT_PROJECTORCONTEXT = 'feed/SELECT_PROJECTORCONTEXT'

const initialState = {
  inboxIsOpened: true,
  atTopLevel: true,
  taskMode: 'definework',
  selectedProjectOrContext: undefined,
}

export function sidebarReducer(state = initialState, action = {}) {
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
  query({FlowRouter}) {


  function selector() {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

    // get the URL contents
    var queryParams = FlowRouter.current().queryParams
    //sweetAlert("queryParams", queryParams)
    //sweetAlert("queryParams.projects", queryParams.projects)

    var query = {$or: [{ project: {$exists: 0}, workflow: "/tw-ui/3.projectselected" },
                       { project: {$exists: 1}, workflow: {$in: ["/tw-ui/2.selectingproject", "/tw-ui/3.projectselected"]}}]}

    var query = { project: {$exists: 0}, workflow: "/tw-ui/3.projectselected" }

    switch (Boolean(queryParams.projects)) {
      case (false):
        break
      default:
        var project = queryParams.projects
        var type = queryParams.type ? queryParams.type : 'project'
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
    paramsflags.timers = (queryParams.showtimers == 'true') ? 'blueflag' : null
    return paramsflags
  },
  selectedProjectOrContext({ context, Store }, e) {
    var id = e.target.id
    if (FlowRouter.getQueryParam('type') == 'project' || !FlowRouter.getQueryParam('type')) {
      FlowRouter.setQueryParams({ projects: id })
    } else {
      FlowRouter.setQueryParams({ contexts: id, type: 'context' })
    }

    Store.dispatch({
      type: SELECT_PROJECTORCONTEXT,
      selectedProjectOrContext: id
    })
  },
  clearFilters() {
    FlowRouter.go('/')
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
  showHideTimers() {
    var currentState = FlowRouter.getQueryParam('showtimers')
    if (currentState != 'true') {
      FlowRouter.setQueryParams({ showtimers: 'true' })
    } else {
      FlowRouter.setQueryParams({ showtimers: null })
    }
  },
}

