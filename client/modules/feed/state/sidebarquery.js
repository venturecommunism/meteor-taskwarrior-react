import FeedDomain from '../actions/feed_domain'

export default (context, actions) => ({
  query: actions.feed_actions.query().projectsquery,
  recordcount: { tasks: 10000 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})
