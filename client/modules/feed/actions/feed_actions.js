import FeedDomain from './feed_domain.jsx'

export default {
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
