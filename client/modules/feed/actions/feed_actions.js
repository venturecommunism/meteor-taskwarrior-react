import FeedDomain from './feed_domain.jsx'

export default {
  query() {
    var type = FeedDomain.getTypeParam()
    //sweetAlert("projectfilter", projectfilter)

    var query = {}
    var queryParams = JSON.stringify(FlowRouter.current().queryParams)
    if (queryParams == "{}") {
      var query = { type: {$nin: ['project', 'context']}, "workflow.status": 'inbox'}
    } else {
      var query = { type: {$nin: ['project', 'context']}}
    }

    if (type) {
      query.type = { $in: [type] }
    }
//    query.workflow = {}
//    query.workflow.status = 'project'
//    sweetAlert("query", JSON.stringify(query))
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
