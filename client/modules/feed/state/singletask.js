import FeedDomain from '../actions/feed_domain'

export default (context, actions) => ({
  query: actions.feed_actions.query().feedquery,
  recordcount: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

