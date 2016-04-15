import FeedDomain from '../actions/feed_domain'

const feedquery = (context, actions) => ({
  connection: null,
  collection: 'tasks',
  query: actions.feed_actions.query().feedquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 10000 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

export default feedquery
