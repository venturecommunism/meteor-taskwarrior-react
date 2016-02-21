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

  filterByProjects() {
    FeedDomain.handleFilterByProjects()
  },
};
