import FeedDomain from './feed_domain.jsx'

export default {
  query() {
    // get the URL contents
    var queryParams = FlowRouter.current().queryParams
    //sweetAlert("queryParams", queryParams)
    //sweetAlert("queryParams.projects", queryParams.projects)
    //var type = FeedDomain.getTypeParam()

    var query = {}
    query.feedquery = {}
    query.projectsquery = {}
    query.filtprojquery = {}

    switch (JSON.stringify(queryParams)) {
      case "{}":
        //sweetAlert("case", "{}")
        query.feedquery = { type: {$nin: ['project', 'context']}, "workflow.status": 'inbox'}
        query.projectsquery = { type : 'project', super: {$exists: 0} }
        query.filtprojquery = { type : 'project', super: {$exists: 0}}
        break
      default:
        query.feedquery = { type: {$nin: ['project', 'context']}}
        query.projectsquery = { type: 'project', super: { $exists: 0} }
        query.filtprojquery = { type: 'project' }
    }

    switch (queryParams.projects) {
      case (null || ''):
        break
      default:
        var project = queryParams.projects
        query.feedquery = { type: {$nin: ['project', 'context']}, project: project }
        //sweetAlert("project", project)
        query.filtprojquery = { type: 'project', super: project}
    }

    switch (queryParams.type) {
      case (null || ''):
        break
      default:
        var type = queryParams.type
        //sweetAlert("type", type)
        query.feedquery.type = { $in: [type] }
        query.feedquery.super = { $exists: 0 }
        query.filtprojquery.super = { $exists: 0 }
    }

    switch (Boolean(queryParams.projects && queryParams.type)) {
      case (false):
        break
      default:
        var project = queryParams.projects
        var type = queryParams.type
        query.projectsquery = { type: type, super: project }
        query.filtprojquery = { _id: {$ne: project}}
    }

    //sweetAlert("query.feedquery.project", query.feedquery.project)
    return query
  },

  clearFilters() {
    FlowRouter.go('/feed')
  },

  incrementTaskLimit(amount) {
    FeedDomain.handleIncrementTaskLimit(amount);
  },

  incrementStepParam() {
    FeedDomain.handleIncrementStepParam();
  },

  createTaskComment(data) {
    FeedDomain.handleCreateTaskComment(data);
  },

  filterAllProjects() {
    FeedDomain.handleFilterAllProjects()
  },

  filterAllContexts() {
    FeedDomain.handleFilterAllContexts()
  },

  filterByProject(_id) {
    FeedDomain.handleFilterByProject(_id)
  },

  filterDefineSomeWork() {
    FeedDomain.handleFilterDefineSomeWork()
  },

  filterDoDefinedWork() {
    FeedDomain.handleFilterDoDefinedWork()
  },
};
