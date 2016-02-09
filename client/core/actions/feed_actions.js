/*global FeedActions:true, FeedDomain */

export default {
  incrementPostLimit(amount) {
    FeedDomain.handleIncrementPostLimit(amount);
  },

  incrementStepParam() {
    FeedDomain.handleIncrementStepParam();
  },

  createComment(data) {
    FeedDomain.handleCreateComment(data);
  }
};
