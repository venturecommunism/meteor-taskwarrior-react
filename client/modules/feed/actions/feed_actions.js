import FeedDomain from './feed_domain.jsx'

export default {
  query() {
    // get the URL contents
    var queryParams = FlowRouter.current().queryParams
    //sweetAlert("queryParams", queryParams)
    //sweetAlert("queryParams.projects", queryParams.projects)
    //var type = FeedDomain.getTypeParam()
    var type = queryParams.type
    var project = queryParams.projects

    var query = {}
    query.feedquery = {}
    query.projectsquery = {}

    if (JSON.stringify(queryParams) == "{}") {
      query.feedquery = { type: {$nin: ['project', 'context']}, "workflow.status": 'inbox'}
      query.projectsquery = { type : 'project' }
    } else if (queryParams.projects != (null || '')) {
      var project = queryParams.projects
      query.feedquery = { type: {$nin: ['project', 'context']}, project: project }
      //sweetAlert("project", project)
      query.projectsquery = { type: 'project'}
    } else {
      query.feedquery = { type: {$nin: ['project', 'context']}}
      query.projectsquery = { type: 'project' }
    }

    if (type) {
      query.feedquery.type = { $in: [type] }
    }

    //sweetAlert("query.feedquery.project", query.feedquery.project)
    return query
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
