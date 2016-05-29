export default {
  name() {
    return 'sidebar'
  },
  query() {
    return {
      connection: null,
      collection: 'tasks',
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: { tasks: 10000 },
    }
  },
  selector() {

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

    //sweetAlert("query.feedquery.project", query.feedquery.project)
    return query
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
  selectedProject({ context, Store }, e) {
sweetAlert("test", "test")
    var id = e.target.id
    FlowRouter.setQueryParams({ projects: id, type: 'project' })

    Store.dispatch({
      type: SELECT_PROJECT,
      selectedProject: id
    })
  },
  clearFilters() {
    FlowRouter.go('/feed')
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

