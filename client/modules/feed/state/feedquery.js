import FeedDomain from '../actions/feed_domain'

const feedquery = (context, actions) => ({
  query: actions.feed_actions.query().feedquery,
  recordcount: { tasks: 10000 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

export default feedquery
