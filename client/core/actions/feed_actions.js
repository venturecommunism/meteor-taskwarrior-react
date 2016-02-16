/*global FeedActions:true, FeedDomain */

import FeedDomain from './feed_domain.jsx'

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
